import { JsonStringEnum as parent_JsonStringEnum } from "../../__type__/parent/JsonStringEnum"
import { assertStringEnumValue as __assert_utility___assertStringEnumValue } from "../../__assert_utility__/assertStringEnumValue"

const __VALUES__ = [
	parent_JsonStringEnum.Name,
	parent_JsonStringEnum.NameWithDescription,
	parent_JsonStringEnum.NameOfEmptyValue
]

export function assertJsonStringEnum( o: any, isNullable:  true,    path?: string ): asserts o is parent_JsonStringEnum | null | undefined
export function assertJsonStringEnum( o: any, isNullable?: boolean, path?: string ): asserts o is parent_JsonStringEnum
export function assertJsonStringEnum( o: any, isNullable?: boolean, path : string = 'parent_JsonStringEnum' ) {
	__assert_utility___assertStringEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
