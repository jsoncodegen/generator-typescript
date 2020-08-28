/**
 * This tests boolean values.
 */

export interface JsonBooleanTest {
	readonly flag: boolean

	/**
	 * This is a flag.
	 */
	readonly flagWithDescription: boolean
	readonly flagOrNull?: (boolean | null | undefined)
	readonly arrayOfFlags: (readonly boolean[])
	readonly arrayOfArraysOfFlags: (readonly (readonly boolean[])[])
	readonly arrayOfFlagsAndNulls: (readonly (boolean | null | undefined)[])
	readonly arrayOfFlagsOrNull?: ((readonly boolean[]) | null | undefined)
	readonly arrayOfFlagsAndNullsOrNull?: ((readonly (boolean | null | undefined)[]) | null | undefined)
	readonly mapOfFlags: { readonly [key: string]: boolean }
	readonly mapOfMapsOfFlags: { readonly [key: string]: { readonly [key: string]: boolean } }
	readonly mapOfNullsAndFlags: { readonly [key: string]: (boolean | null | undefined) }
	readonly mapOfFlagsOrNull?: ({ readonly [key: string]: boolean } | null | undefined)
	readonly mapOfNullsAndFlagsOrNull?: ({ readonly [key: string]: (boolean | null | undefined) } | null | undefined)
	readonly arrayOfMapsOfFlags: (readonly { readonly [key: string]: boolean }[])
	readonly arrayOfMapsOfFlagsOrNull?: ((readonly { readonly [key: string]: boolean }[]) | null | undefined)
	readonly arrayOfNullsAndMapsOfFlags: (readonly ({ readonly [key: string]: boolean } | null | undefined)[])
	readonly arrayOfMapsOfNullsAndFlags: (readonly { readonly [key: string]: (boolean | null | undefined) }[])
	readonly arrayOfNullsAndMapsOfNullsAndFlagsOrNull?: ((readonly ({ readonly [key: string]: (boolean | null | undefined) } | null | undefined)[]) | null | undefined)
	readonly mapOfArraysOfFlags: { readonly [key: string]: (readonly boolean[]) }
	readonly mapOfArraysOfFlagsOrNull?: ({ readonly [key: string]: (readonly boolean[]) } | null | undefined)
	readonly mapOfNullsAndArraysOfFlags: { readonly [key: string]: ((readonly boolean[]) | null | undefined) }
	readonly mapOfArraysOfNullsAndFlags: { readonly [key: string]: (readonly (boolean | null | undefined)[]) }
	readonly mapOfNullsAndArraysOfNullsAndFlagsOrNull?: ({ readonly [key: string]: ((readonly (boolean | null | undefined)[]) | null | undefined) } | null | undefined)
}