import { JsonInterface as __type___parent_tests_JsonInterface } from "./JsonInterface"

/**
 * This tests interface fields.
 */

export interface JsonInterfaceLocalTest {
	readonly object_: __type___parent_tests_JsonInterface

	/**
	 * This is an object.
	 */
	readonly objectWithDescription: __type___parent_tests_JsonInterface
	readonly objectOrNull?: (__type___parent_tests_JsonInterface | null | undefined)
	readonly arrayOfObjects: (readonly __type___parent_tests_JsonInterface[])
	readonly arrayOfArraysOfObjects: (readonly (readonly __type___parent_tests_JsonInterface[])[])
	readonly arrayOfObjectsAndNulls: (readonly (__type___parent_tests_JsonInterface | null | undefined)[])
	readonly arrayOfObjectsOrNull?: ((readonly __type___parent_tests_JsonInterface[]) | null | undefined)
	readonly arrayOfObjectsAndNullsOrNull?: ((readonly (__type___parent_tests_JsonInterface | null | undefined)[]) | null | undefined)
	readonly mapOfObjects: { readonly [key: string]: __type___parent_tests_JsonInterface }
	readonly mapOfMapsOfObjects: { readonly [key: string]: { readonly [key: string]: __type___parent_tests_JsonInterface } }
	readonly mapOfNullsAndObjects: { readonly [key: string]: (__type___parent_tests_JsonInterface | null | undefined) }
	readonly mapOfObjectsOrNull?: ({ readonly [key: string]: __type___parent_tests_JsonInterface } | null | undefined)
	readonly mapOfNullsAndObjectsOrNull?: ({ readonly [key: string]: (__type___parent_tests_JsonInterface | null | undefined) } | null | undefined)
	readonly arrayOfMapsOfObjects: (readonly { readonly [key: string]: __type___parent_tests_JsonInterface }[])
	readonly arrayOfMapsOfObjectsOrNull?: ((readonly { readonly [key: string]: __type___parent_tests_JsonInterface }[]) | null | undefined)
	readonly arrayOfNullsAndMapsOfObjects: (readonly ({ readonly [key: string]: __type___parent_tests_JsonInterface } | null | undefined)[])
	readonly arrayOfMapsOfNullsAndObjects: (readonly { readonly [key: string]: (__type___parent_tests_JsonInterface | null | undefined) }[])
	readonly arrayOfNullsAndMapsOfNullsAndObjectsOrNull?: ((readonly ({ readonly [key: string]: (__type___parent_tests_JsonInterface | null | undefined) } | null | undefined)[]) | null | undefined)
	readonly mapOfArraysOfObjects: { readonly [key: string]: (readonly __type___parent_tests_JsonInterface[]) }
	readonly mapOfArraysOfObjectsOrNull?: ({ readonly [key: string]: (readonly __type___parent_tests_JsonInterface[]) } | null | undefined)
	readonly mapOfNullsAndArraysOfObjects: { readonly [key: string]: ((readonly __type___parent_tests_JsonInterface[]) | null | undefined) }
	readonly mapOfArraysOfNullsAndObjects: { readonly [key: string]: (readonly (__type___parent_tests_JsonInterface | null | undefined)[]) }
	readonly mapOfNullsAndArraysOfNullsAndObjectsOrNull?: ({ readonly [key: string]: ((readonly (__type___parent_tests_JsonInterface | null | undefined)[]) | null | undefined) } | null | undefined)
}