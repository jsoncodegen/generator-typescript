import type {
	IGeneratorResult,
	INumberEnum,
	INumberEnumValue,
	IStringEnum,
} from 'jsoncodegen-types-for-generator'
import type { IConfig } from '../model/IConfig.js'
import {
	ASSERT_FOLDER_NAME,
	ASSERT_UTILITY_FOLDER_NAME,
	TYPE_FOLDER_NAME,
} from '../model/constants.js'
import { templateOfAssertEnum } from '../template/templateOfAssertEnum.js'
import { templateOfImport } from '../template/templateOfImport.js'
import { indent } from './indent.js'
import { joinArrayWith } from './joinArrayWith.js'
import { joinWith } from './joinWith.js'

export async function generateEnumAssert(
	config: IConfig,
	{ directoryPath, values, name, kind }: IStringEnum | INumberEnum,
): Promise<IGeneratorResult> {
	const imports = new Set<string>()
	const rootFolderRelativePath = [...directoryPath.map(() => `..`), '..']
	const assertUtilityFolderRelativePath = [
		...rootFolderRelativePath,
		ASSERT_UTILITY_FOLDER_NAME,
	]
	const typeFolderRelativePath = [...rootFolderRelativePath, TYPE_FOLDER_NAME]
	const assertFunName =
		kind === 'StringEnum' ? `assertStringEnumValue` : `assertNumberEnumValue`
	const assertFunPath = [...assertUtilityFolderRelativePath, assertFunName]
	const assertFunAlias = joinWith(`_`)(
		ASSERT_UTILITY_FOLDER_NAME,
		assertFunName,
	)
	imports.add(
		templateOfImport({
			config,
			path: joinArrayWith(`/`)(assertFunPath),
			typeName: assertFunName,
			alias: assertFunAlias,
			isType: false,
		}),
	)
	const enumAlias = joinWith(`_`)(...directoryPath, name)
	imports.add(
		templateOfImport({
			config,
			path: joinWith(`/`)(...typeFolderRelativePath, ...directoryPath, name),
			typeName: name,
			alias: enumAlias,
			isType: false,
		}),
	)
	const valuesString = joinWith('\n')(
		'[',
		indent(
			joinArrayWith(`,\n`)(
				(values as INumberEnumValue[]).map((value) =>
					joinWith(`.`)(enumAlias, value.name),
				),
			),
		),
		']',
	)
	return {
		filePath: [ASSERT_FOLDER_NAME, ...directoryPath, `assert${name}.ts`],
		content: templateOfAssertEnum({
			imports: joinArrayWith(`\n`)(Array.from(imports).sort()),
			enumName: name,
			enumAlias: enumAlias,
			assertFunAlias: assertFunAlias,
			values: valuesString,
		}),
	}
}
