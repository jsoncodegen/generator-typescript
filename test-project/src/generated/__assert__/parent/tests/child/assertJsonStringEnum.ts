import { JsonStringEnum as parent_tests_child_JsonStringEnum } from "../../../../__type__/parent/tests/child/JsonStringEnum.js"
import { assertStringEnumValue as __assert_utility___assertStringEnumValue } from "../../../../__assert_utility__/assertStringEnumValue.js"

const __VALUES__ = [
	parent_tests_child_JsonStringEnum.Name,
	parent_tests_child_JsonStringEnum.NameWithDescription,
	parent_tests_child_JsonStringEnum.NameOfEmptyValue
]

export function assertJsonStringEnum( o: any, isNullable:  true,    path?: string ): asserts o is parent_tests_child_JsonStringEnum | null | undefined
export function assertJsonStringEnum( o: any, isNullable?: boolean, path?: string ): asserts o is parent_tests_child_JsonStringEnum
export function assertJsonStringEnum( o: any, isNullable?: boolean, path : string = 'parent_tests_child_JsonStringEnum' ) {
	__assert_utility___assertStringEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
