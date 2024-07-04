import type {
	IGeneratorResult,
	IInterface,
} from 'jsoncodegen-types-for-generator'
import type { IConfig } from '../model/IConfig.js'
import { TYPE_FOLDER_NAME, UNION_TYPE_FOLDER_NAME } from '../model/constants.js'
import { templateOfImport } from '../template/templateOfImport.js'
import { templateOfUnionType } from '../template/templateOfUnionType.js'
import { indent } from './indent.js'
import { joinArrayWith } from './joinArrayWith.js'
import { joinWith } from './joinWith.js'

export async function generateUnionTypes(
	config: IConfig,
	interfacesByEnumValueField: Map<string, IInterface[]>,
): Promise<IGeneratorResult[]> {
	const result: IGeneratorResult[] = []
	for (const [fieldName, interfaces] of interfacesByEnumValueField.entries()) {
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
					config,
					path: joinWith('/')(
						'..',
						TYPE_FOLDER_NAME,
						...info.directoryPath,
						info.name,
					),
					typeName: info.name,
					alias: alias,
					isType: true,
				}),
			)
		}
		result.push({
			filePath: [UNION_TYPE_FOLDER_NAME, unionTypeName + '.ts'],
			content: templateOfUnionType({
				imports: joinArrayWith('\n')(Array.from(imports.values()).sort()),
				name: unionTypeName,
				aliases: indent(
					joinArrayWith('\n')(
						Array.from(aliases.values())
							.sort()
							.map((alias) => `| ${alias}`),
					),
				),
			}),
		})
	}
	return result
}
