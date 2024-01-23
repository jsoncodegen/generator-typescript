import {
	IArray,
	IGeneratorResult,
	IInterface,
	IMap,
	TFieldType,
	TNamedType,
} from 'jsoncodegen-types-for-generator'
import { IConfig } from '../model/IConfig.js'
import { IContext } from '../model/IContext.js'
import { TYPE_FOLDER_NAME } from '../model/constants.js'
import { templateOfImport } from '../template/templateOfImport.js'
import { templateOfInterface } from '../template/templateOfInterface.js'
import { fieldTypeToString } from './fieldTypeToString.js'
import { generateFactory } from './generateFactory.js'
import { generateInterfaceAssert } from './generateInterfaceAssert.js'
import { indent } from './indent.js'
import { join } from './join.js'
import { joinArrayWith } from './joinArrayWith.js'
import { joinWith } from './joinWith.js'
import { lineBreakBefore } from './lineBreakBefore.js'
import { makeComment } from './makeComment.js'
import { namedFieldTypeLocalName } from './namedFieldTypeLocalName.js'

export async function generateInterface(
	config: IConfig,
	info: IInterface,
	namedTypesById: Map<string, TNamedType>,
	interfacesByEnumValueField: Map<string, IInterface[]>,
): Promise<IGeneratorResult[]> {
	const {
		directoryPath,
		description: interfaceDescription,
		fields: interfaceFields,
		name: interfaceName,
	} = info
	const readonly = config.isMutable ? '' : 'readonly'
	const context: IContext = {
		readonly,
	}
	const imports = new Set<string>()
	const fieldDeclarations = joinArrayWith(`\n`)(
		interfaceFields.map((field) => {
			const wrappedType = getWrappedType(field.fieldType)
			if (wrappedType.kind !== 'PrimitiveValue') {
				imports.add(
					templateOfImport({
						config,
						typeName: wrappedType.name,
						alias: namedFieldTypeLocalName(wrappedType),
						path: joinWith('/')(
							...wrappedType.relativeDirectoryPath,
							wrappedType.name,
						),
					}),
				)
			}

			const comment = lineBreakBefore(indent(makeComment(field.description)))
			const typeString = fieldTypeToString(context, field.fieldType)
			const optional = field.fieldType.isNullable ? `?` : ``
			const fieldDeclaration = join(
				`\t`,
				joinWith(` `)(readonly, field.name),
				optional,
				joinWith(` `)(`:`, typeString),
			)
			return joinWith(`\n`)(comment, fieldDeclaration)
		}),
	)
	const comment = makeComment(interfaceDescription)
	const interfaceDeclaration = templateOfInterface({
		interfaceName,
		fieldDeclarations,
	})
	const enumValueFields = interfaceFields.filter(
		(field) =>
			(field.fieldType.kind === 'StringEnumValueReference' ||
				field.fieldType.kind === 'NumberEnumValueReference') &&
			!field.fieldType.isNullable,
	)
	for (const field of enumValueFields) {
		const interfaces = interfacesByEnumValueField.get(field.name) || []
		interfaces.push(info)
		interfacesByEnumValueField.set(field.name, interfaces)
	}
	const importDeclarations = joinArrayWith(`\n`)(Array.from(imports).sort())
	return [
		{
			filePath: [TYPE_FOLDER_NAME, ...directoryPath, interfaceName + `.ts`],
			content: joinWith(`\n\n`)(
				importDeclarations,
				comment,
				interfaceDeclaration,
			),
		},
		await generateFactory(config, info),
		await generateInterfaceAssert(config, info, namedTypesById),
	]
}

function getWrappedType(t: TFieldType): Exclude<TFieldType, IArray | IMap> {
	switch (t.kind) {
		case 'Array':
		case 'Map':
			return getWrappedType(t.fieldType)
		default:
			return t
	}
}
