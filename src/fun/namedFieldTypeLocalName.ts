import type {
	IInterfaceReference,
	INumberEnumReference,
	INumberEnumValueReference,
	IStringEnumReference,
	IStringEnumValueReference,
} from 'jsoncodegen-types-for-generator'
import { TYPE_FOLDER_NAME } from '../model/constants.js'
import { joinWith } from './joinWith.js'

export function namedFieldTypeLocalName(
	t:
		| IStringEnumReference
		| IStringEnumValueReference
		| INumberEnumReference
		| INumberEnumValueReference
		| IInterfaceReference,
) {
	return joinWith('_')(TYPE_FOLDER_NAME, ...t.absoluteDirectoryPath, t.name)
}
