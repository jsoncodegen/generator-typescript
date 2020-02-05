import { JsonStringEnum as __type___parent_tests_child_JsonStringEnum } from "./child/JsonStringEnum"

/**
 * This tests string enum fields.
 */

export interface JsonStringEnumChildTest {
	readonly enum_: __type___parent_tests_child_JsonStringEnum

	/**
	 * This is an enum.
	 */
	readonly enumWithDescription: __type___parent_tests_child_JsonStringEnum
	readonly enumOrNull?: (__type___parent_tests_child_JsonStringEnum | null | undefined)
	readonly arrayOfEnums: readonly __type___parent_tests_child_JsonStringEnum[]
	readonly arrayOfEnumsAndNulls: readonly (__type___parent_tests_child_JsonStringEnum | null | undefined)[]
	readonly arrayOfEnumsOrNull?: (readonly __type___parent_tests_child_JsonStringEnum[] | null | undefined)
	readonly arrayOfEnumsAndNullsOrNull?: (readonly (__type___parent_tests_child_JsonStringEnum | null | undefined)[] | null | undefined)
	readonly mapOfEnums: { readonly [key: string]: __type___parent_tests_child_JsonStringEnum }
	readonly mapOfNullsAndEnums: { readonly [key: string]: (__type___parent_tests_child_JsonStringEnum | null | undefined) }
	readonly mapOfEnumsOrNull?: ({ readonly [key: string]: __type___parent_tests_child_JsonStringEnum } | null | undefined)
	readonly mapOfNullsAndEnumsOrNull?: ({ readonly [key: string]: (__type___parent_tests_child_JsonStringEnum | null | undefined) } | null | undefined)
	readonly arrayOfMapsOfEnums: readonly { readonly [key: string]: __type___parent_tests_child_JsonStringEnum }[]
	readonly arrayOfMapsOfEnumsOrNull?: (readonly { readonly [key: string]: __type___parent_tests_child_JsonStringEnum }[] | null | undefined)
	readonly arrayOfNullsAndMapsOfEnums: readonly ({ readonly [key: string]: __type___parent_tests_child_JsonStringEnum } | null | undefined)[]
	readonly arrayOfMapsOfNullsAndEnums: readonly { readonly [key: string]: (__type___parent_tests_child_JsonStringEnum | null | undefined) }[]
	readonly arrayOfNullsAndMapsOfNullsAndEnumsOrNull?: (readonly ({ readonly [key: string]: (__type___parent_tests_child_JsonStringEnum | null | undefined) } | null | undefined)[] | null | undefined)
	readonly mapOfArraysOfEnums: { readonly [key: string]: readonly __type___parent_tests_child_JsonStringEnum[] }
	readonly mapOfArraysOfEnumsOrNull?: ({ readonly [key: string]: readonly __type___parent_tests_child_JsonStringEnum[] } | null | undefined)
	readonly mapOfNullsAndArraysOfEnums: { readonly [key: string]: (readonly __type___parent_tests_child_JsonStringEnum[] | null | undefined) }
	readonly mapOfArraysOfNullsAndEnums: { readonly [key: string]: readonly (__type___parent_tests_child_JsonStringEnum | null | undefined)[] }
	readonly mapOfNullsAndArraysOfNullsAndEnumsOrNull?: ({ readonly [key: string]: (readonly (__type___parent_tests_child_JsonStringEnum | null | undefined)[] | null | undefined) } | null | undefined)
}