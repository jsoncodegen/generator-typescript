import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { JsonNumberTest as __type___parent_tests_JsonNumberTest } from "../../../__type__/parent/tests/JsonNumberTest.js"
import { assertArray as __assert_utility___assertArray } from "../../../__assert_utility__/assertArray.js"
import { assertMap as __assert_utility___assertMap } from "../../../__assert_utility__/assertMap.js"
import { assertNumber as __assert_utility___assertNumber } from "../../../__assert_utility__/assertNumber.js"

export function assertJsonNumberTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonNumberTest | null | undefined
export function assertJsonNumberTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonNumberTest
export function assertJsonNumberTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonNumberTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonNumberTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonNumberTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert_utility___assertNumber(
			o.count,
			false,
			path + `.count`
		)
		__assert_utility___assertNumber(
			o.countWithDescription,
			false,
			path + `.countWithDescription`
		)
		__assert_utility___assertNumber(
			o.countOrNull,
			true,
			path + `.countOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertNumber(
				value,
				false,
				path
			),
			o.arrayOfCounts,
			false,
			path + `.arrayOfCounts`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertNumber(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfArraysOfCounts,
			false,
			path + `.arrayOfArraysOfCounts`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertNumber(
				value,
				true,
				path
			),
			o.arrayOfCountsAndNulls,
			false,
			path + `.arrayOfCountsAndNulls`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertNumber(
				value,
				false,
				path
			),
			o.arrayOfCountsOrNull,
			true,
			path + `.arrayOfCountsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertNumber(
				value,
				true,
				path
			),
			o.arrayOfCountsAndNullsOrNull,
			true,
			path + `.arrayOfCountsAndNullsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertNumber(
				value,
				false,
				path
			),
			o.mapOfCounts,
			false,
			path + `.mapOfCounts`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertNumber(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfMapsOfCounts,
			false,
			path + `.mapOfMapsOfCounts`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertNumber(
				value,
				true,
				path
			),
			o.mapOfNullsAndCounts,
			false,
			path + `.mapOfNullsAndCounts`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertNumber(
				value,
				false,
				path
			),
			o.mapOfCountsOrNull,
			true,
			path + `.mapOfCountsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertNumber(
				value,
				true,
				path
			),
			o.mapOfNullsAndCountsOrNull,
			true,
			path + `.mapOfNullsAndCountsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertNumber(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfCounts,
			false,
			path + `.arrayOfMapsOfCounts`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertNumber(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfCountsOrNull,
			true,
			path + `.arrayOfMapsOfCountsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertNumber(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfCounts,
			false,
			path + `.arrayOfNullsAndMapsOfCounts`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertNumber(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfNullsAndCounts,
			false,
			path + `.arrayOfMapsOfNullsAndCounts`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertNumber(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfNullsAndCountsOrNull,
			true,
			path + `.arrayOfNullsAndMapsOfNullsAndCountsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertNumber(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfCounts,
			false,
			path + `.mapOfArraysOfCounts`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertNumber(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfCountsOrNull,
			true,
			path + `.mapOfArraysOfCountsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertNumber(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfCounts,
			false,
			path + `.mapOfNullsAndArraysOfCounts`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertNumber(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfNullsAndCounts,
			false,
			path + `.mapOfArraysOfNullsAndCounts`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertNumber(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfNullsAndCountsOrNull,
			true,
			path + `.mapOfNullsAndArraysOfNullsAndCountsOrNull`
		)
	}
}
