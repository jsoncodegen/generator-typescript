import { JsonNumberEnum as parent_tests_JsonNumberEnum } from "../../../__type__/parent/tests/JsonNumberEnum.js"
import { assertNumberEnumValue as __assert_utility___assertNumberEnumValue } from "../../../__assert_utility__/assertNumberEnumValue.js"

const __VALUES__ = [
	parent_tests_JsonNumberEnum.Name,
	parent_tests_JsonNumberEnum.NameWithDescription,
	parent_tests_JsonNumberEnum.NameOfFractionValue
]

export function assertJsonNumberEnum( o: any, isNullable:  true,    path?: string ): asserts o is parent_tests_JsonNumberEnum | null | undefined
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path?: string ): asserts o is parent_tests_JsonNumberEnum
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path : string = 'parent_tests_JsonNumberEnum' ) {
	__assert_utility___assertNumberEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
