import { JsonNumberEnum as __type___JsonNumberEnum } from "../../JsonNumberEnum"

/**
 * This tests number enum value fields.
 */

export interface JsonNumberEnumValueRootTest {
	readonly enumValue: __type___JsonNumberEnum.Name

	/**
	 * This is an enum value.
	 */
	readonly enumValueWithDescription: __type___JsonNumberEnum.Name
	readonly enumValueOrNull?: (__type___JsonNumberEnum.Name | null | undefined)
	readonly arrayOfEnumValues: readonly __type___JsonNumberEnum.Name[]
	readonly arrayOfEnumValuesAndNulls: readonly (__type___JsonNumberEnum.Name | null | undefined)[]
	readonly arrayOfEnumValuesOrNull?: (readonly __type___JsonNumberEnum.Name[] | null | undefined)
	readonly arrayOfEnumValuesAndNullsOrNull?: (readonly (__type___JsonNumberEnum.Name | null | undefined)[] | null | undefined)
	readonly mapOfEnumValues: { readonly [key: string]: __type___JsonNumberEnum.Name }
	readonly mapOfNullsAndEnumValues: { readonly [key: string]: (__type___JsonNumberEnum.Name | null | undefined) }
	readonly mapOfEnumValuesOrNull?: ({ readonly [key: string]: __type___JsonNumberEnum.Name } | null | undefined)
	readonly mapOfNullsAndEnumValuesOrNull?: ({ readonly [key: string]: (__type___JsonNumberEnum.Name | null | undefined) } | null | undefined)
	readonly arrayOfMapsOfEnumValues: readonly { readonly [key: string]: __type___JsonNumberEnum.Name }[]
	readonly arrayOfMapsOfEnumValuesOrNull?: (readonly { readonly [key: string]: __type___JsonNumberEnum.Name }[] | null | undefined)
	readonly arrayOfNullsAndMapsOfEnumValues: readonly ({ readonly [key: string]: __type___JsonNumberEnum.Name } | null | undefined)[]
	readonly arrayOfMapsOfNullsAndEnumValues: readonly { readonly [key: string]: (__type___JsonNumberEnum.Name | null | undefined) }[]
	readonly arrayOfNullsAndMapsOfNullsAndEnumValuesOrNull?: (readonly ({ readonly [key: string]: (__type___JsonNumberEnum.Name | null | undefined) } | null | undefined)[] | null | undefined)
	readonly mapOfArraysOfEnumValues: { readonly [key: string]: readonly __type___JsonNumberEnum.Name[] }
	readonly mapOfArraysOfEnumValuesOrNull?: ({ readonly [key: string]: readonly __type___JsonNumberEnum.Name[] } | null | undefined)
	readonly mapOfNullsAndArraysOfEnumValues: { readonly [key: string]: (readonly __type___JsonNumberEnum.Name[] | null | undefined) }
	readonly mapOfArraysOfNullsAndEnumValues: { readonly [key: string]: readonly (__type___JsonNumberEnum.Name | null | undefined)[] }
	readonly mapOfNullsAndArraysOfNullsAndEnumValuesOrNull?: ({ readonly [key: string]: (readonly (__type___JsonNumberEnum.Name | null | undefined)[] | null | undefined) } | null | undefined)
}