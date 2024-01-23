import {
	IGeneratorResult,
	IInterface,
	INumberEnumValueReference,
	IStringEnumValueReference,
} from 'jsoncodegen-types-for-generator'
import { IConfig } from '../model/IConfig.js'
import { FACTORY_FOLDER_NAME, TYPE_FOLDER_NAME } from '../model/constants.js'
import { templateOfFactory } from '../template/templateOfFactory.js'
import { templateOfImport } from '../template/templateOfImport.js'
import { join } from './join.js'
import { joinArrayWith } from './joinArrayWith.js'
import { joinWith } from './joinWith.js'
import { namedFieldTypeLocalName } from './namedFieldTypeLocalName.js'
import { namedFieldTypeLocalNameWithEnumValue } from './namedFieldTypeLocalNameWithEnumValue.js'

export async function generateFactory(
	config: IConfig,
	{ directoryPath, fields: interfaceFields, name: interfaceName }: IInterface,
): Promise<IGeneratorResult> {
	const imports = new Set<string>()
	const rootFolderRelativePath = [...directoryPath.map(() => `..`), '..']
	const typeFolderRelativePath = [...rootFolderRelativePath, TYPE_FOLDER_NAME]
	const interfaceAlias = joinWith(`_`)(
		TYPE_FOLDER_NAME,
		...directoryPath,
		interfaceName,
	)
	imports.add(
		templateOfImport({
			config,
			path: joinWith(`/`)(
				...typeFolderRelativePath,
				...directoryPath,
				interfaceName,
			),
			typeName: interfaceName,
			alias: interfaceAlias,
		}),
	)
	const enumValueFields = interfaceFields.filter(
		(field) =>
			(field.fieldType.kind === 'StringEnumValueReference' ||
				field.fieldType.kind === 'NumberEnumValueReference') &&
			!field.fieldType.isNullable,
	)
	enumValueFields.forEach((field) => {
		const fieldType = field.fieldType as
			| IStringEnumValueReference
			| INumberEnumValueReference
		imports.add(
			templateOfImport({
				config,
				typeName: fieldType.name,
				alias: namedFieldTypeLocalName(fieldType),
				path: joinWith('/')(
					...typeFolderRelativePath,
					...fieldType.absoluteDirectoryPath,
					fieldType.name,
				),
			}),
		)
	})
	const namesToOmit = joinArrayWith(` | `)(
		enumValueFields.map((field) => JSON.stringify(field.name)),
	)
	const paramType = namesToOmit
		? `Omit<${interfaceAlias}, ${namesToOmit}>`
		: interfaceAlias
	const declareProps = joinArrayWith(`\n`)(
		enumValueFields.map((field) =>
			join(
				`\t\t`,
				field.name,
				joinWith(` `)(
					`:`,
					namedFieldTypeLocalNameWithEnumValue(
						field.fieldType as
							| IStringEnumValueReference
							| INumberEnumValueReference,
					),
				),
				`,`,
			),
		),
	)
	return {
		filePath: [
			FACTORY_FOLDER_NAME,
			...directoryPath,
			`make${interfaceName}.ts`,
		],
		content: templateOfFactory({
			imports: joinArrayWith(`\n`)(Array.from(imports).sort()),
			interfaceName: interfaceName,
			interfaceAlias: interfaceAlias,
			declareProps: declareProps,
			paramType: paramType,
		}),
	}
}
