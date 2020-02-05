import {
	IInterfaceReference,
	INumberEnumReference,
	INumberEnumValueReference,
	IStringEnumReference,
	IStringEnumValueReference,
} from 'jsoncodegen-types-for-generator'
import { TYPE_FOLDER_NAME } from '../model/constants'
import { joinWith } from './joinWith'

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
