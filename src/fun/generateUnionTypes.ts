import { IGeneratorResult, IInterface } from 'jsoncodegen-types-for-generator'
import { TYPE_FOLDER_NAME, UNION_TYPE_FOLDER_NAME } from '../model/constants'
import { templateOfImport } from '../template/templateOfImport'
import { templateOfUnionType } from '../template/templateOfUnionType'
import { indent } from './indent'
import { joinArrayWith } from './joinArrayWith'
import { joinWith } from './joinWith'

export async function generateUnionTypes(
	interfacesByEnumValueField: Map<string, IInterface[]>,
): Promise<IGeneratorResult[]> {
	const result: IGeneratorResult[] = []
	for (const [
		fieldName,
		interfaces,
	] of interfacesByEnumValueField.entries()) {
		const imports = new Set<string>()
		const aliases = new Set<string>()
		const unionTypeName = `THas_${fieldName}`
		for (const info of interfaces) {
			const alias = joinWith('_')(
				TYPE_FOLDER_NAME,
				...info.directoryPath,
				info.name,
			)
			aliases.add(alias)
			imports.add(
				templateOfImport({
					path: joinWith('/')(
						'..',
						TYPE_FOLDER_NAME,
						...info.directoryPath,
						info.name,
					),
					typeName: info.name,
					alias: alias,
				}),
			)
		}
		result.push({
			filePath: [UNION_TYPE_FOLDER_NAME, unionTypeName + '.ts'],
			content: templateOfUnionType({
				imports: joinArrayWith('\n')(
					Array.from(imports.values()).sort(),
				),
				name: unionTypeName,
				aliases: indent(
					joinArrayWith('\n')(
						Array.from(aliases.values())
							.sort()
							.map(alias => `| ${alias}`),
					),
				),
			}),
		})
	}
	return result
}
