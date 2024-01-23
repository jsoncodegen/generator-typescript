import { JsonStringEnum as parent_tests_JsonStringEnum } from "../../../__type__/parent/tests/JsonStringEnum.js"
import { assertStringEnumValue as __assert_utility___assertStringEnumValue } from "../../../__assert_utility__/assertStringEnumValue.js"

const __VALUES__ = [
	parent_tests_JsonStringEnum.Name,
	parent_tests_JsonStringEnum.NameWithDescription,
	parent_tests_JsonStringEnum.NameOfEmptyValue
]

export function assertJsonStringEnum( o: any, isNullable:  true,    path?: string ): asserts o is parent_tests_JsonStringEnum | null | undefined
export function assertJsonStringEnum( o: any, isNullable?: boolean, path?: string ): asserts o is parent_tests_JsonStringEnum
export function assertJsonStringEnum( o: any, isNullable?: boolean, path : string = 'parent_tests_JsonStringEnum' ) {
	__assert_utility___assertStringEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
