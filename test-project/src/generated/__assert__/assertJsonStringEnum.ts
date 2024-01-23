import { JsonStringEnum as JsonStringEnum } from "../__type__/JsonStringEnum.js"
import { assertStringEnumValue as __assert_utility___assertStringEnumValue } from "../__assert_utility__/assertStringEnumValue.js"

const __VALUES__ = [
	JsonStringEnum.Name,
	JsonStringEnum.NameWithDescription,
	JsonStringEnum.NameOfEmptyValue
]

export function assertJsonStringEnum( o: any, isNullable:  true,    path?: string ): asserts o is JsonStringEnum | null | undefined
export function assertJsonStringEnum( o: any, isNullable?: boolean, path?: string ): asserts o is JsonStringEnum
export function assertJsonStringEnum( o: any, isNullable?: boolean, path : string = 'JsonStringEnum' ) {
	__assert_utility___assertStringEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
