import type { JsonInterfaceChildTest as __type___parent_tests_JsonInterfaceChildTest } from "../../../__type__/parent/tests/JsonInterfaceChildTest.js"
import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { assertArray as __assert_utility___assertArray } from "../../../__assert_utility__/assertArray.js"
import { assertJsonInterface as __assert___parent_tests_child_assertJsonInterface } from "./child/assertJsonInterface.js"
import { assertMap as __assert_utility___assertMap } from "../../../__assert_utility__/assertMap.js"

export function assertJsonInterfaceChildTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonInterfaceChildTest | null | undefined
export function assertJsonInterfaceChildTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonInterfaceChildTest
export function assertJsonInterfaceChildTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonInterfaceChildTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonInterfaceChildTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonInterfaceChildTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert___parent_tests_child_assertJsonInterface(
			o.object_,
			false,
			path + `.object_`
		)
		__assert___parent_tests_child_assertJsonInterface(
			o.objectWithDescription,
			false,
			path + `.objectWithDescription`
		)
		__assert___parent_tests_child_assertJsonInterface(
			o.objectOrNull,
			true,
			path + `.objectOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert___parent_tests_child_assertJsonInterface(
				value,
				false,
				path
			),
			o.arrayOfObjects,
			false,
			path + `.arrayOfObjects`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfArraysOfObjects,
			false,
			path + `.arrayOfArraysOfObjects`
		)
		__assert_utility___assertArray(
			(value, path) => __assert___parent_tests_child_assertJsonInterface(
				value,
				true,
				path
			),
			o.arrayOfObjectsAndNulls,
			false,
			path + `.arrayOfObjectsAndNulls`
		)
		__assert_utility___assertArray(
			(value, path) => __assert___parent_tests_child_assertJsonInterface(
				value,
				false,
				path
			),
			o.arrayOfObjectsOrNull,
			true,
			path + `.arrayOfObjectsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert___parent_tests_child_assertJsonInterface(
				value,
				true,
				path
			),
			o.arrayOfObjectsAndNullsOrNull,
			true,
			path + `.arrayOfObjectsAndNullsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert___parent_tests_child_assertJsonInterface(
				value,
				false,
				path
			),
			o.mapOfObjects,
			false,
			path + `.mapOfObjects`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfMapsOfObjects,
			false,
			path + `.mapOfMapsOfObjects`
		)
		__assert_utility___assertMap(
			(value, path) => __assert___parent_tests_child_assertJsonInterface(
				value,
				true,
				path
			),
			o.mapOfNullsAndObjects,
			false,
			path + `.mapOfNullsAndObjects`
		)
		__assert_utility___assertMap(
			(value, path) => __assert___parent_tests_child_assertJsonInterface(
				value,
				false,
				path
			),
			o.mapOfObjectsOrNull,
			true,
			path + `.mapOfObjectsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert___parent_tests_child_assertJsonInterface(
				value,
				true,
				path
			),
			o.mapOfNullsAndObjectsOrNull,
			true,
			path + `.mapOfNullsAndObjectsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfObjects,
			false,
			path + `.arrayOfMapsOfObjects`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfObjectsOrNull,
			true,
			path + `.arrayOfMapsOfObjectsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfObjects,
			false,
			path + `.arrayOfNullsAndMapsOfObjects`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfNullsAndObjects,
			false,
			path + `.arrayOfMapsOfNullsAndObjects`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfNullsAndObjectsOrNull,
			true,
			path + `.arrayOfNullsAndMapsOfNullsAndObjectsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfObjects,
			false,
			path + `.mapOfArraysOfObjects`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfObjectsOrNull,
			true,
			path + `.mapOfArraysOfObjectsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfObjects,
			false,
			path + `.mapOfNullsAndArraysOfObjects`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfNullsAndObjects,
			false,
			path + `.mapOfArraysOfNullsAndObjects`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonInterface(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfNullsAndObjectsOrNull,
			true,
			path + `.mapOfNullsAndArraysOfNullsAndObjectsOrNull`
		)
	}
}
