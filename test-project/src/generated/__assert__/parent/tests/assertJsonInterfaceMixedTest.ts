import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { JsonInterfaceMixedTest as __type___parent_tests_JsonInterfaceMixedTest } from "../../../__type__/parent/tests/JsonInterfaceMixedTest.js"
import { assertJsonInterface as __assert___assertJsonInterface } from "../../assertJsonInterface.js"
import { assertJsonInterface as __assert___parent_assertJsonInterface } from "../assertJsonInterface.js"
import { assertJsonInterface as __assert___parent_sibling_assertJsonInterface } from "../sibling/assertJsonInterface.js"
import { assertJsonInterface as __assert___parent_tests_assertJsonInterface } from "./assertJsonInterface.js"
import { assertJsonInterface as __assert___parent_tests_child_assertJsonInterface } from "./child/assertJsonInterface.js"

export function assertJsonInterfaceMixedTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonInterfaceMixedTest | null | undefined
export function assertJsonInterfaceMixedTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonInterfaceMixedTest
export function assertJsonInterfaceMixedTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonInterfaceMixedTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonInterfaceMixedTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonInterfaceMixedTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert___parent_tests_child_assertJsonInterface(
			o.child,
			false,
			path + `.child`
		)
		__assert___parent_tests_assertJsonInterface(
			o.local,
			false,
			path + `.local`
		)
		__assert___parent_assertJsonInterface(
			o.parent,
			false,
			path + `.parent`
		)
		__assert___assertJsonInterface(
			o.root,
			false,
			path + `.root`
		)
		__assert___parent_sibling_assertJsonInterface(
			o.sibling,
			false,
			path + `.sibling`
		)
	}
}
