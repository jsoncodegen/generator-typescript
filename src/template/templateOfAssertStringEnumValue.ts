import { IConfig } from '../model/IConfig.js'

export function templateOfAssertStringEnumValue(config: IConfig) {
	return `import { AssertionError } from './AssertionError${
		config.importFileExtension ?? ''
	}'

export function assertStringEnumValue( expected: string[], actual: any, isNullable : true   , path?: string ): asserts actual is string | null | undefined
export function assertStringEnumValue( expected: string[], actual: any, isNullable?: boolean, path?: string ): asserts actual is string
export function assertStringEnumValue( expected: string[], actual: any, isNullable?: boolean, path?: string ) {
	if (actual == null) {
		if (!isNullable) {
			throw new AssertionError(
				\`Expected string enum, got null (at \${path})\`,
			)
		}
	} else {
		if (typeof actual !== 'string' || !expected.includes(actual)) {
			throw new AssertionError(
				\`Expected string enum, got \${typeof actual} (at \${path})\`,
			)
		}
	}
}
`
}
