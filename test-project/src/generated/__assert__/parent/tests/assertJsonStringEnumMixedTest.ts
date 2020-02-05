import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError"
import { JsonStringEnum as JsonStringEnum } from "../../../__type__/JsonStringEnum"
import { JsonStringEnum as parent_JsonStringEnum } from "../../../__type__/parent/JsonStringEnum"
import { JsonStringEnum as parent_sibling_JsonStringEnum } from "../../../__type__/parent/sibling/JsonStringEnum"
import { JsonStringEnum as parent_tests_JsonStringEnum } from "../../../__type__/parent/tests/JsonStringEnum"
import { JsonStringEnum as parent_tests_child_JsonStringEnum } from "../../../__type__/parent/tests/child/JsonStringEnum"
import { JsonStringEnumMixedTest as __type___parent_tests_JsonStringEnumMixedTest } from "../../../__type__/parent/tests/JsonStringEnumMixedTest"
import { assertJsonStringEnum as __assert___assertJsonStringEnum } from "../../assertJsonStringEnum"
import { assertJsonStringEnum as __assert___parent_assertJsonStringEnum } from "../assertJsonStringEnum"
import { assertJsonStringEnum as __assert___parent_sibling_assertJsonStringEnum } from "../sibling/assertJsonStringEnum"
import { assertJsonStringEnum as __assert___parent_tests_assertJsonStringEnum } from "./assertJsonStringEnum"
import { assertJsonStringEnum as __assert___parent_tests_child_assertJsonStringEnum } from "./child/assertJsonStringEnum"

export function assertJsonStringEnumMixedTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonStringEnumMixedTest | null | undefined
export function assertJsonStringEnumMixedTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonStringEnumMixedTest
export function assertJsonStringEnumMixedTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonStringEnumMixedTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonStringEnumMixedTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonStringEnumMixedTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert___parent_tests_child_assertJsonStringEnum(
			o.child,
			false,
			path + `.child:parent_tests_child_JsonStringEnum`
		)
		__assert___parent_tests_assertJsonStringEnum(
			o.local,
			false,
			path + `.local:parent_tests_JsonStringEnum`
		)
		__assert___parent_assertJsonStringEnum(
			o.parent,
			false,
			path + `.parent:parent_JsonStringEnum`
		)
		__assert___assertJsonStringEnum(
			o.root,
			false,
			path + `.root:JsonStringEnum`
		)
		__assert___parent_sibling_assertJsonStringEnum(
			o.sibling,
			false,
			path + `.sibling:parent_sibling_JsonStringEnum`
		)
	}
}
