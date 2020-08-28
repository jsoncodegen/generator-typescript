/**
 * This tests string values.
 */

export interface JsonStringTest {
	readonly name: string

	/**
	 * This is a name.
	 */
	readonly nameWithDescription: string
	readonly nameOrNull?: (string | null | undefined)
	readonly arrayOfNames: (readonly string[])
	readonly arrayOfArraysOfNames: (readonly (readonly string[])[])
	readonly arrayOfNamesAndNulls: (readonly (string | null | undefined)[])
	readonly arrayOfNamesOrNull?: ((readonly string[]) | null | undefined)
	readonly arrayOfNamesAndNullsOrNull?: ((readonly (string | null | undefined)[]) | null | undefined)
	readonly mapOfNames: { readonly [key: string]: string }
	readonly mapOfMapsOfNames: { readonly [key: string]: { readonly [key: string]: string } }
	readonly mapOfNullsAndNames: { readonly [key: string]: (string | null | undefined) }
	readonly mapOfNamesOrNull?: ({ readonly [key: string]: string } | null | undefined)
	readonly mapOfNullsAndNamesOrNull?: ({ readonly [key: string]: (string | null | undefined) } | null | undefined)
	readonly arrayOfMapsOfNames: (readonly { readonly [key: string]: string }[])
	readonly arrayOfMapsOfNamesOrNull?: ((readonly { readonly [key: string]: string }[]) | null | undefined)
	readonly arrayOfNullsAndMapsOfNames: (readonly ({ readonly [key: string]: string } | null | undefined)[])
	readonly arrayOfMapsOfNullsAndNames: (readonly { readonly [key: string]: (string | null | undefined) }[])
	readonly arrayOfNullsAndMapsOfNullsAndNamesOrNull?: ((readonly ({ readonly [key: string]: (string | null | undefined) } | null | undefined)[]) | null | undefined)
	readonly mapOfArraysOfNames: { readonly [key: string]: (readonly string[]) }
	readonly mapOfArraysOfNamesOrNull?: ({ readonly [key: string]: (readonly string[]) } | null | undefined)
	readonly mapOfNullsAndArraysOfNames: { readonly [key: string]: ((readonly string[]) | null | undefined) }
	readonly mapOfArraysOfNullsAndNames: { readonly [key: string]: (readonly (string | null | undefined)[]) }
	readonly mapOfNullsAndArraysOfNullsAndNamesOrNull?: ({ readonly [key: string]: ((readonly (string | null | undefined)[]) | null | undefined) } | null | undefined)
}