import { IConfig } from '../model/IConfig.js'

export function templateOfAssertNumberEnumValue(config: IConfig) {
	return `import { AssertionError } from './AssertionError${
		config.importFileExtension ?? ''
	}'

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
