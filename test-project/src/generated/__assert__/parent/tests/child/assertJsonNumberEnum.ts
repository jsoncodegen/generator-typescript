import { JsonNumberEnum as parent_tests_child_JsonNumberEnum } from "../../../../__type__/parent/tests/child/JsonNumberEnum.js"
import { assertNumberEnumValue as __assert_utility___assertNumberEnumValue } from "../../../../__assert_utility__/assertNumberEnumValue.js"

const __VALUES__ = [
	parent_tests_child_JsonNumberEnum.Name,
	parent_tests_child_JsonNumberEnum.NameWithDescription,
	parent_tests_child_JsonNumberEnum.NameOfFractionValue
]

export function assertJsonNumberEnum( o: any, isNullable:  true,    path?: string ): asserts o is parent_tests_child_JsonNumberEnum | null | undefined
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path?: string ): asserts o is parent_tests_child_JsonNumberEnum
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path : string = 'parent_tests_child_JsonNumberEnum' ) {
	__assert_utility___assertNumberEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
