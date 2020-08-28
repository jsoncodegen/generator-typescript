import { JsonStringEnum as __type___JsonStringEnum } from "../../JsonStringEnum"

/**
 * This tests string enum value fields.
 */

export interface JsonStringEnumValueRootTest {
	readonly enumValue: __type___JsonStringEnum.Name

	/**
	 * This is an enum value.
	 */
	readonly enumValueWithDescription: __type___JsonStringEnum.Name
	readonly enumValueOrNull?: (__type___JsonStringEnum.Name | null | undefined)
	readonly arrayOfEnumValues: (readonly __type___JsonStringEnum.Name[])
	readonly arrayOfArraysOfEnumValues: (readonly (readonly __type___JsonStringEnum.Name[])[])
	readonly arrayOfEnumValuesAndNulls: (readonly (__type___JsonStringEnum.Name | null | undefined)[])
	readonly arrayOfEnumValuesOrNull?: ((readonly __type___JsonStringEnum.Name[]) | null | undefined)
	readonly arrayOfEnumValuesAndNullsOrNull?: ((readonly (__type___JsonStringEnum.Name | null | undefined)[]) | null | undefined)
	readonly mapOfEnumValues: { readonly [key: string]: __type___JsonStringEnum.Name }
	readonly mapOfMapsOfEnumValues: { readonly [key: string]: { readonly [key: string]: __type___JsonStringEnum.Name } }
	readonly mapOfNullsAndEnumValues: { readonly [key: string]: (__type___JsonStringEnum.Name | null | undefined) }
	readonly mapOfEnumValuesOrNull?: ({ readonly [key: string]: __type___JsonStringEnum.Name } | null | undefined)
	readonly mapOfNullsAndEnumValuesOrNull?: ({ readonly [key: string]: (__type___JsonStringEnum.Name | null | undefined) } | null | undefined)
	readonly arrayOfMapsOfEnumValues: (readonly { readonly [key: string]: __type___JsonStringEnum.Name }[])
	readonly arrayOfMapsOfEnumValuesOrNull?: ((readonly { readonly [key: string]: __type___JsonStringEnum.Name }[]) | null | undefined)
	readonly arrayOfNullsAndMapsOfEnumValues: (readonly ({ readonly [key: string]: __type___JsonStringEnum.Name } | null | undefined)[])
	readonly arrayOfMapsOfNullsAndEnumValues: (readonly { readonly [key: string]: (__type___JsonStringEnum.Name | null | undefined) }[])
	readonly arrayOfNullsAndMapsOfNullsAndEnumValuesOrNull?: ((readonly ({ readonly [key: string]: (__type___JsonStringEnum.Name | null | undefined) } | null | undefined)[]) | null | undefined)
	readonly mapOfArraysOfEnumValues: { readonly [key: string]: (readonly __type___JsonStringEnum.Name[]) }
	readonly mapOfArraysOfEnumValuesOrNull?: ({ readonly [key: string]: (readonly __type___JsonStringEnum.Name[]) } | null | undefined)
	readonly mapOfNullsAndArraysOfEnumValues: { readonly [key: string]: ((readonly __type___JsonStringEnum.Name[]) | null | undefined) }
	readonly mapOfArraysOfNullsAndEnumValues: { readonly [key: string]: (readonly (__type___JsonStringEnum.Name | null | undefined)[]) }
	readonly mapOfNullsAndArraysOfNullsAndEnumValuesOrNull?: ({ readonly [key: string]: ((readonly (__type___JsonStringEnum.Name | null | undefined)[]) | null | undefined) } | null | undefined)
}