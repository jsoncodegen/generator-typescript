import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError"
import { JsonNumberEnum as JsonNumberEnum } from "../../../__type__/JsonNumberEnum"
import { JsonNumberEnum as parent_JsonNumberEnum } from "../../../__type__/parent/JsonNumberEnum"
import { JsonNumberEnum as parent_sibling_JsonNumberEnum } from "../../../__type__/parent/sibling/JsonNumberEnum"
import { JsonNumberEnum as parent_tests_JsonNumberEnum } from "../../../__type__/parent/tests/JsonNumberEnum"
import { JsonNumberEnum as parent_tests_child_JsonNumberEnum } from "../../../__type__/parent/tests/child/JsonNumberEnum"
import { JsonNumberEnumValueMixedTest as __type___parent_tests_JsonNumberEnumValueMixedTest } from "../../../__type__/parent/tests/JsonNumberEnumValueMixedTest"
import { assertExactValue as __assert_utility___assertExactValue } from "../../../__assert_utility__/assertExactValue"

export function assertJsonNumberEnumValueMixedTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonNumberEnumValueMixedTest | null | undefined
export function assertJsonNumberEnumValueMixedTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonNumberEnumValueMixedTest
export function assertJsonNumberEnumValueMixedTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonNumberEnumValueMixedTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonNumberEnumValueMixedTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonNumberEnumValueMixedTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert_utility___assertExactValue(
			parent_tests_child_JsonNumberEnum.Name,
			o.child,
			false,
			path + `.child:parent_tests_child_JsonNumberEnum:Name`
		)
		__assert_utility___assertExactValue(
			parent_tests_JsonNumberEnum.Name,
			o.local,
			false,
			path + `.local:parent_tests_JsonNumberEnum:Name`
		)
		__assert_utility___assertExactValue(
			parent_JsonNumberEnum.Name,
			o.parent,
			false,
			path + `.parent:parent_JsonNumberEnum:Name`
		)
		__assert_utility___assertExactValue(
			JsonNumberEnum.Name,
			o.root,
			false,
			path + `.root:JsonNumberEnum:Name`
		)
		__assert_utility___assertExactValue(
			parent_sibling_JsonNumberEnum.Name,
			o.sibling,
			false,
			path + `.sibling:parent_sibling_JsonNumberEnum:Name`
		)
	}
}
