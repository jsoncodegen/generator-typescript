import type { JsonStringEnumValueMixedTest as __type___parent_tests_JsonStringEnumValueMixedTest } from "../../../__type__/parent/tests/JsonStringEnumValueMixedTest.js"
import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { JsonStringEnum as JsonStringEnum } from "../../../__type__/JsonStringEnum.js"
import { JsonStringEnum as parent_JsonStringEnum } from "../../../__type__/parent/JsonStringEnum.js"
import { JsonStringEnum as parent_sibling_JsonStringEnum } from "../../../__type__/parent/sibling/JsonStringEnum.js"
import { JsonStringEnum as parent_tests_JsonStringEnum } from "../../../__type__/parent/tests/JsonStringEnum.js"
import { JsonStringEnum as parent_tests_child_JsonStringEnum } from "../../../__type__/parent/tests/child/JsonStringEnum.js"
import { assertExactValue as __assert_utility___assertExactValue } from "../../../__assert_utility__/assertExactValue.js"

export function assertJsonStringEnumValueMixedTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonStringEnumValueMixedTest | null | undefined
export function assertJsonStringEnumValueMixedTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonStringEnumValueMixedTest
export function assertJsonStringEnumValueMixedTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonStringEnumValueMixedTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonStringEnumValueMixedTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonStringEnumValueMixedTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert_utility___assertExactValue(
			parent_tests_child_JsonStringEnum.Name,
			o.child,
			false,
			path + `.child:parent_tests_child_JsonStringEnum:Name`
		)
		__assert_utility___assertExactValue(
			parent_tests_JsonStringEnum.Name,
			o.local,
			false,
			path + `.local:parent_tests_JsonStringEnum:Name`
		)
		__assert_utility___assertExactValue(
			parent_JsonStringEnum.Name,
			o.parent,
			false,
			path + `.parent:parent_JsonStringEnum:Name`
		)
		__assert_utility___assertExactValue(
			JsonStringEnum.Name,
			o.root,
			false,
			path + `.root:JsonStringEnum:Name`
		)
		__assert_utility___assertExactValue(
			parent_sibling_JsonStringEnum.Name,
			o.sibling,
			false,
			path + `.sibling:parent_sibling_JsonStringEnum:Name`
		)
	}
}
