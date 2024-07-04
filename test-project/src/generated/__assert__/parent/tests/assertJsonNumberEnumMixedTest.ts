import type { JsonNumberEnumMixedTest as __type___parent_tests_JsonNumberEnumMixedTest } from "../../../__type__/parent/tests/JsonNumberEnumMixedTest.js"
import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { JsonNumberEnum as JsonNumberEnum } from "../../../__type__/JsonNumberEnum.js"
import { JsonNumberEnum as parent_JsonNumberEnum } from "../../../__type__/parent/JsonNumberEnum.js"
import { JsonNumberEnum as parent_sibling_JsonNumberEnum } from "../../../__type__/parent/sibling/JsonNumberEnum.js"
import { JsonNumberEnum as parent_tests_JsonNumberEnum } from "../../../__type__/parent/tests/JsonNumberEnum.js"
import { JsonNumberEnum as parent_tests_child_JsonNumberEnum } from "../../../__type__/parent/tests/child/JsonNumberEnum.js"
import { assertJsonNumberEnum as __assert___assertJsonNumberEnum } from "../../assertJsonNumberEnum.js"
import { assertJsonNumberEnum as __assert___parent_assertJsonNumberEnum } from "../assertJsonNumberEnum.js"
import { assertJsonNumberEnum as __assert___parent_sibling_assertJsonNumberEnum } from "../sibling/assertJsonNumberEnum.js"
import { assertJsonNumberEnum as __assert___parent_tests_assertJsonNumberEnum } from "./assertJsonNumberEnum.js"
import { assertJsonNumberEnum as __assert___parent_tests_child_assertJsonNumberEnum } from "./child/assertJsonNumberEnum.js"

export function assertJsonNumberEnumMixedTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonNumberEnumMixedTest | null | undefined
export function assertJsonNumberEnumMixedTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonNumberEnumMixedTest
export function assertJsonNumberEnumMixedTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonNumberEnumMixedTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonNumberEnumMixedTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonNumberEnumMixedTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert___parent_tests_child_assertJsonNumberEnum(
			o.child,
			false,
			path + `.child:parent_tests_child_JsonNumberEnum`
		)
		__assert___parent_tests_assertJsonNumberEnum(
			o.local,
			false,
			path + `.local:parent_tests_JsonNumberEnum`
		)
		__assert___parent_assertJsonNumberEnum(
			o.parent,
			false,
			path + `.parent:parent_JsonNumberEnum`
		)
		__assert___assertJsonNumberEnum(
			o.root,
			false,
			path + `.root:JsonNumberEnum`
		)
		__assert___parent_sibling_assertJsonNumberEnum(
			o.sibling,
			false,
			path + `.sibling:parent_sibling_JsonNumberEnum`
		)
	}
}
