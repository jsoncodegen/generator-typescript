import { AssertionError } from './AssertionError.js'

export function assertNumber( value: any, isNullable : true   , path?: string ): asserts value is number | null | undefined
export function assertNumber( value: any, isNullable?: boolean, path?: string ): asserts value is number
export function assertNumber( value: any, isNullable?: boolean, path?: string ) {
	if (value == null) {
		if (!isNullable) {
			throw new AssertionError(`Expected number, got null (at ${path})`)
		}
	} else {
		if (typeof value !== 'number') {
			throw new AssertionError(
				`Expected number, got ${typeof value} (at ${path})`,
			)
		}
		if (isNaN(value)) {
			throw new AssertionError(`Expected number, got NaN (at ${path})`)
		}
		if (!isFinite(value)) {
			throw new AssertionError(
				`Expected number, got ${value} (at ${path})`,
			)
		}
	}
}
