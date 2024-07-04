import type {
	IGeneratorResult,
	IInterface,
	IInterfaceField,
	TFieldType,
	TNamedType,
} from 'jsoncodegen-types-for-generator'
import type { IConfig } from '../model/IConfig.js'
import {
	ASSERT_FOLDER_NAME,
	ASSERT_UTILITY_FOLDER_NAME,
	TYPE_FOLDER_NAME,
} from '../model/constants.js'
import { templateOfAssertInterface } from '../template/templateOfAssertInterface.js'
import { templateOfImport } from '../template/templateOfImport.js'
import { capitalize } from './capitalize.js'
import { indent } from './indent.js'
import { join } from './join.js'
import { joinArrayWith } from './joinArrayWith.js'
import { joinWith } from './joinWith.js'

export async function generateInterfaceAssert(
	config: IConfig,
	{ directoryPath, description, fields, name }: IInterface,
	namedTypesById: Map<string, TNamedType>,
): Promise<IGeneratorResult> {
	const imports = new Set<string>()
	const rootFolderRelativePath = [...directoryPath.map(() => `..`), '..']
	const assertUtilityFolderRelativePath = [
		...rootFolderRelativePath,
		ASSERT_UTILITY_FOLDER_NAME,
	]
	const typeFolderRelativePath = [...rootFolderRelativePath, TYPE_FOLDER_NAME]
	const assertionErrorAlias = joinWith(`_`)(
		ASSERT_UTILITY_FOLDER_NAME,
		`AssertionError`,
	)
	const interfaceAlias = joinWith(`_`)(TYPE_FOLDER_NAME, ...directoryPath, name)
	imports.add(
		templateOfImport({
			config,
			path: joinWith(`/`)(...typeFolderRelativePath, ...directoryPath, name),
			typeName: name,
			alias: interfaceAlias,
			isType: true,
		}),
	)
	imports.add(
		templateOfImport({
			config,
			path: joinWith(`/`)(...assertUtilityFolderRelativePath, `AssertionError`),
			typeName: `AssertionError`,
			alias: assertionErrorAlias,
			isType: false,
		}),
	)
	const assertions = fields.map((field) => wrap(field.fieldType, field))
	return {
		filePath: [ASSERT_FOLDER_NAME, ...directoryPath, `assert${name}.ts`],
		content: templateOfAssertInterface({
			imports: joinArrayWith(`\n`)(Array.from(imports).sort()),
			interfaceName: name,
			interfaceAlias: interfaceAlias,
			assertions: joinArrayWith(`\n`)(assertions),
			assertionErrorAlias: assertionErrorAlias,
		}),
	}

	function wrap(fieldType: TFieldType, field: IInterfaceField): string {
		let assertFunName = ''
		switch (fieldType.kind) {
			case 'PrimitiveValue':
			case 'InterfaceReference':
			case 'NumberEnumReference':
			case 'StringEnumReference':
				assertFunName = `assert${capitalize(fieldType.name)}`
				break
			case 'StringEnumValueReference':
			case 'NumberEnumValueReference':
				assertFunName = `assertExactValue`
				break
			case 'Array':
				assertFunName = `assertArray`
				break
			case 'Map':
				assertFunName = `assertMap`
				break
		}
		let assertFunPath = ''
		let assertFunAlias = ''
		switch (fieldType.kind) {
			case 'InterfaceReference':
			case 'NumberEnumReference':
			case 'StringEnumReference':
				assertFunPath = joinWith(`/`)(
					...fieldType.relativeDirectoryPath,
					assertFunName,
				)
				assertFunAlias = joinWith(`_`)(
					ASSERT_FOLDER_NAME,
					...fieldType.absoluteDirectoryPath,
					assertFunName,
				)
				break
			default:
				assertFunPath = joinWith(`/`)(
					...assertUtilityFolderRelativePath,
					assertFunName,
				)
				assertFunAlias = joinWith(`_`)(
					ASSERT_UTILITY_FOLDER_NAME,
					assertFunName,
				)
				break
		}
		let fieldTypeName = ''
		switch (fieldType.kind) {
			case 'StringEnumReference':
			case 'NumberEnumReference':
			case 'StringEnumValueReference':
			case 'NumberEnumValueReference':
				fieldTypeName = joinArrayWith('_')([
					...fieldType.absoluteDirectoryPath,
					fieldType.name,
				])
				break
		}
		let fieldTypeValueName = ''
		switch (fieldType.kind) {
			case 'StringEnumValueReference':
			case 'NumberEnumValueReference':
				fieldTypeValueName = fieldType.valueName
				break
		}
		imports.add(
			templateOfImport({
				config,
				path: assertFunPath,
				typeName: assertFunName,
				alias: assertFunAlias,
				isType: false,
			}),
		)
		switch (fieldType.kind) {
			case 'StringEnumReference':
			case 'NumberEnumReference':
			case 'StringEnumValueReference':
			case 'NumberEnumValueReference':
				imports.add(
					templateOfImport({
						config,
						path: joinWith('/')(
							...typeFolderRelativePath,
							...fieldType.absoluteDirectoryPath,
							fieldType.name,
						),
						typeName: fieldType.name,
						alias: fieldTypeName,
						isType: false,
					}),
				)
				break
		}
		let validation = ''
		switch (fieldType.kind) {
			case 'Array':
			case 'Map':
				validation = `(value, path) => ${wrap(fieldType.fieldType, field)}`
				break
			case 'StringEnumValueReference':
			case 'NumberEnumValueReference':
				validation = joinWith('.')(fieldTypeName, fieldTypeValueName)
				break
		}
		return join(
			assertFunAlias,
			`(\n`,
			indent(
				joinWith(`,\n`)(
					validation,
					field.fieldType === fieldType ? `o.${field.name}` : `value`,
					fieldType.isNullable + '',
					field.fieldType === fieldType
						? `path + \`.${joinWith(`:`)(
								field.name,
								fieldTypeName,
								fieldTypeValueName,
						  )}\``
						: `path`,
				),
			),
			`\n)`,
		)
	}
}
