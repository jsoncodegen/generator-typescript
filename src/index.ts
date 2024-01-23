import {
	IGenerator,
	IGeneratorResult,
	IInterface,
	TGeneratorResult,
} from 'jsoncodegen-types-for-generator'
import { generateEnum } from './fun/generateEnum.js'
import { generateExtras } from './fun/generateExtras.js'
import { generateInterface } from './fun/generateInterface.js'
import { generateUnionTypes } from './fun/generateUnionTypes.js'
import { IConfig } from './model/IConfig.js'

export const generator: IGenerator = {
	async generate(config: IConfig, namedTypesById): Promise<TGeneratorResult> {
		let result: IGeneratorResult[] = []
		const interfacesByEnumValueField = new Map<string, IInterface[]>()
		for (const namedType of namedTypesById.values()) {
			switch (namedType.kind) {
				case 'Interface':
					result = [
						...result,
						...(await generateInterface(
							config,
							namedType,
							namedTypesById,
							interfacesByEnumValueField,
						)),
					]
					break
				case 'NumberEnum':
				case 'StringEnum':
					result = [...result, ...(await generateEnum(config, namedType))]
					break
			}
		}
		result = [
			...result,
			...(await generateUnionTypes(config, interfacesByEnumValueField)),
			...(await generateExtras(config)),
		]
		return result
	},
}
