import {
	INumberEnumValueReference,
	IStringEnumValueReference,
} from 'jsoncodegen-types-for-generator'
import { joinWith } from './joinWith'
import { namedFieldTypeLocalName } from './namedFieldTypeLocalName'

export function namedFieldTypeLocalNameWithEnumValue(
	t: IStringEnumValueReference | INumberEnumValueReference,
) {
	return joinWith('.')(namedFieldTypeLocalName(t), t.valueName)
}
