import type { JsonStringEnumChildTest as __type___parent_tests_JsonStringEnumChildTest } from "../../../__type__/parent/tests/JsonStringEnumChildTest.js"
import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { JsonStringEnum as parent_tests_child_JsonStringEnum } from "../../../__type__/parent/tests/child/JsonStringEnum.js"
import { assertArray as __assert_utility___assertArray } from "../../../__assert_utility__/assertArray.js"
import { assertJsonStringEnum as __assert___parent_tests_child_assertJsonStringEnum } from "./child/assertJsonStringEnum.js"
import { assertMap as __assert_utility___assertMap } from "../../../__assert_utility__/assertMap.js"

export function assertJsonStringEnumChildTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonStringEnumChildTest | null | undefined
export function assertJsonStringEnumChildTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonStringEnumChildTest
export function assertJsonStringEnumChildTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonStringEnumChildTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonStringEnumChildTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonStringEnumChildTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert___parent_tests_child_assertJsonStringEnum(
			o.enum_,
			false,
			path + `.enum_:parent_tests_child_JsonStringEnum`
		)
		__assert___parent_tests_child_assertJsonStringEnum(
			o.enumWithDescription,
			false,
			path + `.enumWithDescription:parent_tests_child_JsonStringEnum`
		)
		__assert___parent_tests_child_assertJsonStringEnum(
			o.enumOrNull,
			true,
			path + `.enumOrNull:parent_tests_child_JsonStringEnum`
		)
		__assert_utility___assertArray(
			(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
				value,
				false,
				path
			),
			o.arrayOfEnums,
			false,
			path + `.arrayOfEnums`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfArraysOfEnums,
			false,
			path + `.arrayOfArraysOfEnums`
		)
		__assert_utility___assertArray(
			(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
				value,
				true,
				path
			),
			o.arrayOfEnumsAndNulls,
			false,
			path + `.arrayOfEnumsAndNulls`
		)
		__assert_utility___assertArray(
			(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
				value,
				false,
				path
			),
			o.arrayOfEnumsOrNull,
			true,
			path + `.arrayOfEnumsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
				value,
				true,
				path
			),
			o.arrayOfEnumsAndNullsOrNull,
			true,
			path + `.arrayOfEnumsAndNullsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
				value,
				false,
				path
			),
			o.mapOfEnums,
			false,
			path + `.mapOfEnums`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfMapsOfEnums,
			false,
			path + `.mapOfMapsOfEnums`
		)
		__assert_utility___assertMap(
			(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
				value,
				true,
				path
			),
			o.mapOfNullsAndEnums,
			false,
			path + `.mapOfNullsAndEnums`
		)
		__assert_utility___assertMap(
			(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
				value,
				false,
				path
			),
			o.mapOfEnumsOrNull,
			true,
			path + `.mapOfEnumsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
				value,
				true,
				path
			),
			o.mapOfNullsAndEnumsOrNull,
			true,
			path + `.mapOfNullsAndEnumsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfEnums,
			false,
			path + `.arrayOfMapsOfEnums`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfEnumsOrNull,
			true,
			path + `.arrayOfMapsOfEnumsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfEnums,
			false,
			path + `.arrayOfNullsAndMapsOfEnums`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfNullsAndEnums,
			false,
			path + `.arrayOfMapsOfNullsAndEnums`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfNullsAndEnumsOrNull,
			true,
			path + `.arrayOfNullsAndMapsOfNullsAndEnumsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfEnums,
			false,
			path + `.mapOfArraysOfEnums`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfEnumsOrNull,
			true,
			path + `.mapOfArraysOfEnumsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfEnums,
			false,
			path + `.mapOfNullsAndArraysOfEnums`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfNullsAndEnums,
			false,
			path + `.mapOfArraysOfNullsAndEnums`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert___parent_tests_child_assertJsonStringEnum(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfNullsAndEnumsOrNull,
			true,
			path + `.mapOfNullsAndArraysOfNullsAndEnumsOrNull`
		)
	}
}
