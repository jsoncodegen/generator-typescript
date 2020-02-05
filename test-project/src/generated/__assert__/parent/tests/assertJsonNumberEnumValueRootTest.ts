import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError"
import { JsonNumberEnum as JsonNumberEnum } from "../../../__type__/JsonNumberEnum"
import { JsonNumberEnumValueRootTest as __type___parent_tests_JsonNumberEnumValueRootTest } from "../../../__type__/parent/tests/JsonNumberEnumValueRootTest"
import { assertArray as __assert_utility___assertArray } from "../../../__assert_utility__/assertArray"
import { assertExactValue as __assert_utility___assertExactValue } from "../../../__assert_utility__/assertExactValue"
import { assertMap as __assert_utility___assertMap } from "../../../__assert_utility__/assertMap"

export function assertJsonNumberEnumValueRootTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonNumberEnumValueRootTest | null | undefined
export function assertJsonNumberEnumValueRootTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonNumberEnumValueRootTest
export function assertJsonNumberEnumValueRootTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonNumberEnumValueRootTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonNumberEnumValueRootTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonNumberEnumValueRootTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert_utility___assertExactValue(
			JsonNumberEnum.Name,
			o.enumValue,
			false,
			path + `.enumValue:JsonNumberEnum:Name`
		)
		__assert_utility___assertExactValue(
			JsonNumberEnum.Name,
			o.enumValueWithDescription,
			false,
			path + `.enumValueWithDescription:JsonNumberEnum:Name`
		)
		__assert_utility___assertExactValue(
			JsonNumberEnum.Name,
			o.enumValueOrNull,
			true,
			path + `.enumValueOrNull:JsonNumberEnum:Name`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertExactValue(
				JsonNumberEnum.Name,
				value,
				false,
				path
			),
			o.arrayOfEnumValues,
			false,
			path + `.arrayOfEnumValues`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertExactValue(
				JsonNumberEnum.Name,
				value,
				true,
				path
			),
			o.arrayOfEnumValuesAndNulls,
			false,
			path + `.arrayOfEnumValuesAndNulls`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertExactValue(
				JsonNumberEnum.Name,
				value,
				false,
				path
			),
			o.arrayOfEnumValuesOrNull,
			true,
			path + `.arrayOfEnumValuesOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertExactValue(
				JsonNumberEnum.Name,
				value,
				true,
				path
			),
			o.arrayOfEnumValuesAndNullsOrNull,
			true,
			path + `.arrayOfEnumValuesAndNullsOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertExactValue(
				JsonNumberEnum.Name,
				value,
				false,
				path
			),
			o.mapOfEnumValues,
			false,
			path + `.mapOfEnumValues`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertExactValue(
				JsonNumberEnum.Name,
				value,
				true,
				path
			),
			o.mapOfNullsAndEnumValues,
			false,
			path + `.mapOfNullsAndEnumValues`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertExactValue(
				JsonNumberEnum.Name,
				value,
				false,
				path
			),
			o.mapOfEnumValuesOrNull,
			true,
			path + `.mapOfEnumValuesOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertExactValue(
				JsonNumberEnum.Name,
				value,
				true,
				path
			),
			o.mapOfNullsAndEnumValuesOrNull,
			true,
			path + `.mapOfNullsAndEnumValuesOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfEnumValues,
			false,
			path + `.arrayOfMapsOfEnumValues`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfEnumValuesOrNull,
			true,
			path + `.arrayOfMapsOfEnumValuesOrNull`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfEnumValues,
			false,
			path + `.arrayOfNullsAndMapsOfEnumValues`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfMapsOfNullsAndEnumValues,
			false,
			path + `.arrayOfMapsOfNullsAndEnumValues`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.arrayOfNullsAndMapsOfNullsAndEnumValuesOrNull,
			true,
			path + `.arrayOfNullsAndMapsOfNullsAndEnumValuesOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfEnumValues,
			false,
			path + `.mapOfArraysOfEnumValues`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfEnumValuesOrNull,
			true,
			path + `.mapOfArraysOfEnumValuesOrNull`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					false,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfEnumValues,
			false,
			path + `.mapOfNullsAndArraysOfEnumValues`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					true,
					path
				),
				value,
				false,
				path
			),
			o.mapOfArraysOfNullsAndEnumValues,
			false,
			path + `.mapOfArraysOfNullsAndEnumValues`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertExactValue(
					JsonNumberEnum.Name,
					value,
					true,
					path
				),
				value,
				true,
				path
			),
			o.mapOfNullsAndArraysOfNullsAndEnumValuesOrNull,
			true,
			path + `.mapOfNullsAndArraysOfNullsAndEnumValuesOrNull`
		)
	}
}
