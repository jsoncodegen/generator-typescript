import { JsonNumberEnum as __type___JsonNumberEnum } from "../../JsonNumberEnum.js"

/**
 * This tests number enum fields.
 */

export interface JsonNumberEnumRootTest {
	readonly enum_: __type___JsonNumberEnum

	/**
	 * This is an enum.
	 */
	readonly enumWithDescription: __type___JsonNumberEnum
	readonly enumOrNull?: (__type___JsonNumberEnum | null | undefined)
	readonly arrayOfEnums: (readonly __type___JsonNumberEnum[])
	readonly arrayOfArraysOfEnums: (readonly (readonly __type___JsonNumberEnum[])[])
	readonly arrayOfEnumsAndNulls: (readonly (__type___JsonNumberEnum | null | undefined)[])
	readonly arrayOfEnumsOrNull?: ((readonly __type___JsonNumberEnum[]) | null | undefined)
	readonly arrayOfEnumsAndNullsOrNull?: ((readonly (__type___JsonNumberEnum | null | undefined)[]) | null | undefined)
	readonly mapOfEnums: { readonly [key: string]: __type___JsonNumberEnum }
	readonly mapOfMapsOfEnums: { readonly [key: string]: { readonly [key: string]: __type___JsonNumberEnum } }
	readonly mapOfNullsAndEnums: { readonly [key: string]: (__type___JsonNumberEnum | null | undefined) }
	readonly mapOfEnumsOrNull?: ({ readonly [key: string]: __type___JsonNumberEnum } | null | undefined)
	readonly mapOfNullsAndEnumsOrNull?: ({ readonly [key: string]: (__type___JsonNumberEnum | null | undefined) } | null | undefined)
	readonly arrayOfMapsOfEnums: (readonly { readonly [key: string]: __type___JsonNumberEnum }[])
	readonly arrayOfMapsOfEnumsOrNull?: ((readonly { readonly [key: string]: __type___JsonNumberEnum }[]) | null | undefined)
	readonly arrayOfNullsAndMapsOfEnums: (readonly ({ readonly [key: string]: __type___JsonNumberEnum } | null | undefined)[])
	readonly arrayOfMapsOfNullsAndEnums: (readonly { readonly [key: string]: (__type___JsonNumberEnum | null | undefined) }[])
	readonly arrayOfNullsAndMapsOfNullsAndEnumsOrNull?: ((readonly ({ readonly [key: string]: (__type___JsonNumberEnum | null | undefined) } | null | undefined)[]) | null | undefined)
	readonly mapOfArraysOfEnums: { readonly [key: string]: (readonly __type___JsonNumberEnum[]) }
	readonly mapOfArraysOfEnumsOrNull?: ({ readonly [key: string]: (readonly __type___JsonNumberEnum[]) } | null | undefined)
	readonly mapOfNullsAndArraysOfEnums: { readonly [key: string]: ((readonly __type___JsonNumberEnum[]) | null | undefined) }
	readonly mapOfArraysOfNullsAndEnums: { readonly [key: string]: (readonly (__type___JsonNumberEnum | null | undefined)[]) }
	readonly mapOfNullsAndArraysOfNullsAndEnumsOrNull?: ({ readonly [key: string]: ((readonly (__type___JsonNumberEnum | null | undefined)[]) | null | undefined) } | null | undefined)
}