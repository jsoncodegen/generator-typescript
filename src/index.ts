import {
	IGenerator,
	IGeneratorResult,
	IInterface,
	TGeneratorResult,
} from 'jsoncodegen-types-for-generator'
import { generateEnum } from './fun/generateEnum'
import { generateExtras } from './fun/generateExtras'
import { generateInterface } from './fun/generateInterface'
import { generateUnionTypes } from './fun/generateUnionTypes'
import { IConfig } from './model/IConfig'

const generator: IGenerator = {
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
					result = [...result, ...(await generateEnum(namedType))]
					break
			}
		}
		result = [
			...result,
			...(await generateUnionTypes(interfacesByEnumValueField)),
			...(await generateExtras()),
		]
		return result
	},
}

module.exports = generator
