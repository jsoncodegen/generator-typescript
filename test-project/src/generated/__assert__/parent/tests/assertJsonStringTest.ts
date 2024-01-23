import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { JsonStringTest as __type___parent_tests_JsonStringTest } from "../../../__type__/parent/tests/JsonStringTest.js"
import { assertArray as __assert_utility___assertArray } from "../../../__assert_utility__/assertArray.js"
import { assertMap as __assert_utility___assertMap } from "../../../__assert_utility__/assertMap.js"
import { assertString as __assert_utility___assertString } from "../../../__assert_utility__/assertString.js"

export function assertJsonStringTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonStringTest | null | undefined
export function assertJsonStringTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonStringTest
export function assertJsonStringTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonStringTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonStringTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonStringTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert_utility___assertString(
			o.name,
			false,
			path + `.name`
		)
		__assert_utility___assertString(
			o.nameWithDescription,
			false,
			path + `.nameWithDescription`
		)
		__assert_utility___assertString(
			o.nameOrNull,
			true,
			path + `.nameOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertString(
				value,
				false,
				path
			),
			o.arrayOfNames,
			false,
			path + `.arrayOfNames`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertString(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfArraysOfNames,
			false,
			path + `.arrayOfArraysOfNames`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertString(
				value,
				true,
				path
			),
			o.arrayOfNamesAndNulls,
			false,
			path + `.arrayOfNamesAndNulls`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertString(
				value,
				false,
				path
			),
			o.arrayOfNamesOrNull,
			true,
			path + `.arrayOfNamesOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertString(
				value,
				true,
				path
			),
			o.arrayOfNamesAndNullsOrNull,
			true,
			path + `.arrayOfNamesAndNullsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertString(
				value,
				false,
				path
			),
			o.mapOfNames,
			false,
			path + `.mapOfNames`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertString(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfMapsOfNames,
			false,
			path + `.mapOfMapsOfNames`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertString(
				value,
				true,
				path
			),
			o.mapOfNullsAndNames,
			false,
			path + `.mapOfNullsAndNames`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertString(
				value,
				false,
				path
			),
			o.mapOfNamesOrNull,
			true,
			path + `.mapOfNamesOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertString(
				value,
				true,
				path
			),
			o.mapOfNullsAndNamesOrNull,
			true,
			path + `.mapOfNullsAndNamesOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertString(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfNames,
			false,
			path + `.arrayOfMapsOfNames`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertString(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfNamesOrNull,
			true,
			path + `.arrayOfMapsOfNamesOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertString(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfNames,
			false,
			path + `.arrayOfNullsAndMapsOfNames`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertString(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfNullsAndNames,
			false,
			path + `.arrayOfMapsOfNullsAndNames`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertString(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfNullsAndNamesOrNull,
			true,
			path + `.arrayOfNullsAndMapsOfNullsAndNamesOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertString(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfNames,
			false,
			path + `.mapOfArraysOfNames`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertString(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfNamesOrNull,
			true,
			path + `.mapOfArraysOfNamesOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertString(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfNames,
			false,
			path + `.mapOfNullsAndArraysOfNames`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertString(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfNullsAndNames,
			false,
			path + `.mapOfArraysOfNullsAndNames`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertString(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfNullsAndNamesOrNull,
			true,
			path + `.mapOfNullsAndArraysOfNullsAndNamesOrNull`
		)
	}
}
