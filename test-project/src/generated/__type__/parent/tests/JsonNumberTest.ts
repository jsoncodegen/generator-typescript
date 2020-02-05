/**
 * This tests number values.
 */

export interface JsonNumberTest {
	readonly count: number

	/**
	 * This is a count.
	 */
	readonly countWithDescription: number
	readonly countOrNull?: (number | null | undefined)
	readonly arrayOfCounts: readonly number[]
	readonly arrayOfCountsAndNulls: readonly (number | null | undefined)[]
	readonly arrayOfCountsOrNull?: (readonly number[] | null | undefined)
	readonly arrayOfCountsAndNullsOrNull?: (readonly (number | null | undefined)[] | null | undefined)
	readonly mapOfCounts: { readonly [key: string]: number }
	readonly mapOfNullsAndCounts: { readonly [key: string]: (number | null | undefined) }
	readonly mapOfCountsOrNull?: ({ readonly [key: string]: number } | null | undefined)
	readonly mapOfNullsAndCountsOrNull?: ({ readonly [key: string]: (number | null | undefined) } | null | undefined)
	readonly arrayOfMapsOfCounts: readonly { readonly [key: string]: number }[]
	readonly arrayOfMapsOfCountsOrNull?: (readonly { readonly [key: string]: number }[] | null | undefined)
	readonly arrayOfNullsAndMapsOfCounts: readonly ({ readonly [key: string]: number } | null | undefined)[]
	readonly arrayOfMapsOfNullsAndCounts: readonly { readonly [key: string]: (number | null | undefined) }[]
	readonly arrayOfNullsAndMapsOfNullsAndCountsOrNull?: (readonly ({ readonly [key: string]: (number | null | undefined) } | null | undefined)[] | null | undefined)
	readonly mapOfArraysOfCounts: { readonly [key: string]: readonly number[] }
	readonly mapOfArraysOfCountsOrNull?: ({ readonly [key: string]: readonly number[] } | null | undefined)
	readonly mapOfNullsAndArraysOfCounts: { readonly [key: string]: (readonly number[] | null | undefined) }
	readonly mapOfArraysOfNullsAndCounts: { readonly [key: string]: readonly (number | null | undefined)[] }
	readonly mapOfNullsAndArraysOfNullsAndCountsOrNull?: ({ readonly [key: string]: (readonly (number | null | undefined)[] | null | undefined) } | null | undefined)
}