import { AssertionError as __assert_utility___AssertionError } from "../../../__assert_utility__/AssertionError.js"
import { JsonInterface as __type___parent_tests_JsonInterface } from "../../../__type__/parent/tests/JsonInterface.js"

export function assertJsonInterface( o: any, isNullable : true   , path?: string ): asserts o is __type___parent_tests_JsonInterface | null | undefined
export function assertJsonInterface( o: any, isNullable?: boolean, path?: string ): asserts o is __type___parent_tests_JsonInterface
export function assertJsonInterface( o: any, isNullable?: boolean, path : string = '__type___parent_tests_JsonInterface' ) {
	if (o == null) {
		if (!isNullable) {
			throw new __assert_utility___AssertionError(`Expected __type___parent_tests_JsonInterface, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new __assert_utility___AssertionError(
				`Expected __type___parent_tests_JsonInterface, got ${typeof o} (at ${path})`,
			)
		}

	}
}
