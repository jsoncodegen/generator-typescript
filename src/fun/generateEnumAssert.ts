import {
	IGeneratorResult,
	INumberEnum,
	INumberEnumValue,
	IStringEnum,
} from 'jsoncodegen-types-for-generator'
import {
	ASSERT_FOLDER_NAME,
	ASSERT_UTILITY_FOLDER_NAME,
	TYPE_FOLDER_NAME,
} from '../model/constants'
import { templateOfAssertEnum } from '../template/templateOfAssertEnum'
import { templateOfImport } from '../template/templateOfImport'
import { indent } from './indent'
import { joinArrayWith } from './joinArrayWith'
import { joinWith } from './joinWith'

export async function generateEnumAssert({
	directoryPath,
	values,
	name,
	kind,
}: IStringEnum | INumberEnum): Promise<IGeneratorResult> {
	const imports = new Set<string>()
	const rootFolderRelativePath = [...directoryPath.map(() => `..`), '..']
	const assertUtilityFolderRelativePath = [
		...rootFolderRelativePath,
		ASSERT_UTILITY_FOLDER_NAME,
	]
	const typeFolderRelativePath = [...rootFolderRelativePath, TYPE_FOLDER_NAME]
	const assertFunName =
		kind === 'StringEnum'
			? `assertStringEnumValue`
			: `assertNumberEnumValue`
	const assertFunPath = [...assertUtilityFolderRelativePath, assertFunName]
	const assertFunAlias = joinWith(`_`)(
		ASSERT_UTILITY_FOLDER_NAME,
		assertFunName,
	)
	imports.add(
		templateOfImport({
			path: joinArrayWith(`/`)(assertFunPath),
			typeName: assertFunName,
			alias: assertFunAlias,
		}),
	)
	const enumAlias = joinWith(`_`)(...directoryPath, name)
	imports.add(
		templateOfImport({
			path: joinWith(`/`)(
				...typeFolderRelativePath,
				...directoryPath,
				name,
			),
			typeName: name,
			alias: enumAlias,
		}),
	)
	const valuesString = joinWith('\n')(
		'[',
		indent(
			joinArrayWith(`,\n`)(
				(values as INumberEnumValue[]).map(value =>
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
