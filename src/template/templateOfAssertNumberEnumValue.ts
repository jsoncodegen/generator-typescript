export function templateOfAssertNumberEnumValue() {
	return `import { AssertionError } from './AssertionError'

export function assertNumberEnumValue( expected: number[], actual: any, isNullable : true   , path?: string ): asserts actual is number | null | undefined
export function assertNumberEnumValue( expected: number[], actual: any, isNullable?: boolean, path?: string ): asserts actual is number
export function assertNumberEnumValue( expected: number[], actual: any, isNullable?: boolean, path?: string ) {
	if (actual == null) {
		if (!isNullable) {
			throw new AssertionError(
				\`Expected number enum, got null (at \${path})\`,
			)
		}
	} else {
		if (typeof actual !== 'number' || !expected.includes(actual)) {
			throw new AssertionError(
				\`Expected number enum, got \${typeof actual} (at \${path})\`,
			)
		}
	}
}
`
}
