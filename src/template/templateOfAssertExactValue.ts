import { IConfig } from '../model/IConfig.js'

export function templateOfAssertExactValue(config: IConfig) {
	return `import { AssertionError } from './AssertionError${
		config.importFileExtension ?? ''
	}'

export function assertExactValue<T>( expected: T, actual: any, isNullable : true   , path?: string ): asserts actual is T | null | undefined
export function assertExactValue<T>( expected: T, actual: any, isNullable?: boolean, path?: string ): asserts actual is T
export function assertExactValue<T>( expected: T, actual: any, isNullable?: boolean, path?: string ) {
	if (actual == null) {
		if (!isNullable) {
			throw new AssertionError(
				\`Expected \${expected}, got null (at \${path})\`,
			)
		}
	} else {
		if (actual !== expected) {
			throw new AssertionError(
				\`Expected \${expected}, got \${actual} (at \${path})\`,
			)
		}
	}
}
`
}
