import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { JsonNumberEnum as parent_JsonNumberEnum } from "../../../__type__/parent/JsonNumberEnum.js"
import { JsonNumberEnumValueParentTest as __type___parent_tests_JsonNumberEnumValueParentTest } from "../../../__type__/parent/tests/JsonNumberEnumValueParentTest.js"
import { assertArray as __assert_utility___assertArray } from "../../../__assert_utility__/assertArray.js"
import { assertExactValue as __assert_utility___assertExactValue } from "../../../__assert_utility__/assertExactValue.js"
import { assertMap as __assert_utility___assertMap } from "../../../__assert_utility__/assertMap.js"

export function assertJsonNumberEnumValueParentTest( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonNumberEnumValueParentTest | null | undefined
export function assertJsonNumberEnumValueParentTest( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonNumberEnumValueParentTest
export function assertJsonNumberEnumValueParentTest( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonNumberEnumValueParentTest' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonNumberEnumValueParentTest, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonNumberEnumValueParentTest, got ${typeof o} (at ${path})`,
			)
		}
		__assert_utility___assertExactValue(
			parent_JsonNumberEnum.Name,
			o.enumValue,
			false,
			path + `.enumValue:parent_JsonNumberEnum:Name`
		)
		__assert_utility___assertExactValue(
			parent_JsonNumberEnum.Name,
			o.enumValueWithDescription,
			false,
			path + `.enumValueWithDescription:parent_JsonNumberEnum:Name`
		)
		__assert_utility___assertExactValue(
			parent_JsonNumberEnum.Name,
			o.enumValueOrNull,
			true,
			path + `.enumValueOrNull:parent_JsonNumberEnum:Name`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertExactValue(
				parent_JsonNumberEnum.Name,
				value,
				false,
				path
			),
			o.arrayOfEnumValues,
			false,
			path + `.arrayOfEnumValues`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertArray(
				(value, path) => __assert_utility___assertExactValue(
					parent_JsonNumberEnum.Name,
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.arrayOfArraysOfEnumValues,
			false,
			path + `.arrayOfArraysOfEnumValues`
		)
		__assert_utility___assertArray(
			(value, path) => __assert_utility___assertExactValue(
				parent_JsonNumberEnum.Name,
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
				parent_JsonNumberEnum.Name,
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
				parent_JsonNumberEnum.Name,
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
				parent_JsonNumberEnum.Name,
				value,
				false,
				path
			),
			o.mapOfEnumValues,
			false,
			path + `.mapOfEnumValues`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertMap(
				(value, path) => __assert_utility___assertExactValue(
					parent_JsonNumberEnum.Name,
					value,
					false,
					path
				),
				value,
				false,
				path
			),
			o.mapOfMapsOfEnumValues,
			false,
			path + `.mapOfMapsOfEnumValues`
		)
		__assert_utility___assertMap(
			(value, path) => __assert_utility___assertExactValue(
				parent_JsonNumberEnum.Name,
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
				parent_JsonNumberEnum.Name,
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
				parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
					parent_JsonNumberEnum.Name,
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
