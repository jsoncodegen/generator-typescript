import { AssertionError as __assert_utility___AssertionError } from "../__assert_utility__/AssertionError"
import { JsonInterface as __type___JsonInterface } from "../__type__/JsonInterface"

export function assertJsonInterface( o: any, isNullable : true   , path?: string ): asserts o is __type___JsonInterface | null | undefined
export function assertJsonInterface( o: any, isNullable?: boolean, path?: string ): asserts o is __type___JsonInterface
export function assertJsonInterface( o: any, isNullable?: boolean, path : string = '__type___JsonInterface' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___JsonInterface, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___JsonInterface, got ${typeof o} (at ${path})`,
			)
		}

	}
}
