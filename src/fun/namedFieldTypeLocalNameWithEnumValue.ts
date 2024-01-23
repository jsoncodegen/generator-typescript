import {
	INumberEnumValueReference,
	IStringEnumValueReference,
} from 'jsoncodegen-types-for-generator'
import { joinWith } from './joinWith.js'
import { namedFieldTypeLocalName } from './namedFieldTypeLocalName.js'

export function namedFieldTypeLocalNameWithEnumValue(
	t: IStringEnumValueReference | INumberEnumValueReference,
) {
	return joinWith('.')(namedFieldTypeLocalName(t), t.valueName)
}
