import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError"
import { JsonBooleanTest as __type___parent_tests_JsonBooleanTest } from "../../../__type__/parent/tests/JsonBooleanTest"
import { assertArray as __assert_utility___assertArray } from "../../../__assert_utility__/assertArray"
import { assertBoolean as __assert_utility___assertBoolean } from "../../../__assert_utility__/assertBoolean"
import { assertMap as __assert_utility___assertMap } from "../../../__assert_utility__/assertMap"

export function assertJsonBooleanTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonBooleanTest | null | undefined
export function assertJsonBooleanTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonBooleanTest
export function assertJsonBooleanTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonBooleanTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonBooleanTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonBooleanTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert_utility___assertBoolean(
			o.flag,
			false,
			path + `.flag`
		)
		__assert_utility___assertBoolean(
			o.flagWithDescription,
			false,
			path + `.flagWithDescription`
		)
		__assert_utility___assertBoolean(
			o.flagOrNull,
			true,
			path + `.flagOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertBoolean(
				value,
				false,
				path
			),
			o.arrayOfFlags,
			false,
			path + `.arrayOfFlags`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertBoolean(
				value,
				true,
				path
			),
			o.arrayOfFlagsAndNulls,
			false,
			path + `.arrayOfFlagsAndNulls`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertBoolean(
				value,
				false,
				path
			),
			o.arrayOfFlagsOrNull,
			true,
			path + `.arrayOfFlagsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertBoolean(
				value,
				true,
				path
			),
			o.arrayOfFlagsAndNullsOrNull,
			true,
			path + `.arrayOfFlagsAndNullsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertBoolean(
				value,
				false,
				path
			),
			o.mapOfFlags,
			false,
			path + `.mapOfFlags`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertBoolean(
				value,
				true,
				path
			),
			o.mapOfNullsAndFlags,
			false,
			path + `.mapOfNullsAndFlags`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertBoolean(
				value,
				false,
				path
			),
			o.mapOfFlagsOrNull,
			true,
			path + `.mapOfFlagsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertBoolean(
				value,
				true,
				path
			),
			o.mapOfNullsAndFlagsOrNull,
			true,
			path + `.mapOfNullsAndFlagsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertBoolean(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfFlags,
			false,
			path + `.arrayOfMapsOfFlags`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertBoolean(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfFlagsOrNull,
			true,
			path + `.arrayOfMapsOfFlagsOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertBoolean(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfFlags,
			false,
			path + `.arrayOfNullsAndMapsOfFlags`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertBoolean(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfNullsAndFlags,
			false,
			path + `.arrayOfMapsOfNullsAndFlags`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertBoolean(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfNullsAndFlagsOrNull,
			true,
			path + `.arrayOfNullsAndMapsOfNullsAndFlagsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertBoolean(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfFlags,
			false,
			path + `.mapOfArraysOfFlags`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertBoolean(
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfFlagsOrNull,
			true,
			path + `.mapOfArraysOfFlagsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertBoolean(
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfFlags,
			false,
			path + `.mapOfNullsAndArraysOfFlags`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertBoolean(
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfNullsAndFlags,
			false,
			path + `.mapOfArraysOfNullsAndFlags`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertBoolean(
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfNullsAndFlagsOrNull,
			true,
			path + `.mapOfNullsAndArraysOfNullsAndFlagsOrNull`
		)
	}
}
