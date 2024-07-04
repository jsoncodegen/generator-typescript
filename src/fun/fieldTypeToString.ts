import type { TFieldType } from 'jsoncodegen-types-for-generator'
import type { IContext } from '../model/IContext.js'
import { join } from './join.js'
import { joinWith } from './joinWith.js'
import { namedFieldTypeLocalName } from './namedFieldTypeLocalName.js'
import { namedFieldTypeLocalNameWithEnumValue } from './namedFieldTypeLocalNameWithEnumValue.js'

export function fieldTypeToString(context: IContext, fieldType: TFieldType) {
	const { readonly } = context
	let result = ''
	switch (fieldType.kind) {
		case 'Array':
			result = join(
				`(`,
				joinWith(` `)(
					readonly,
					join(fieldTypeToString(context, fieldType.fieldType), `[]`),
				),
				`)`,
			)
			break
		case 'Map':
			result = joinWith(` `)(
				`{`,
				readonly,
				`[key: string]:`,
				fieldTypeToString(context, fieldType.fieldType),
				`}`,
			)
			break
		case 'InterfaceReference':
		case 'NumberEnumReference':
		case 'StringEnumReference':
			result = namedFieldTypeLocalName(fieldType)
			break
		case 'StringEnumValueReference':
		case 'NumberEnumValueReference':
			result = namedFieldTypeLocalNameWithEnumValue(fieldType)
			break
		case 'PrimitiveValue':
			result = fieldType.name
			break
		default:
			throw new Error(`[q2cx8v]`)
	}
	if (fieldType.isNullable) {
		result = `(${result} | null | undefined)`
	}
	return result
}
