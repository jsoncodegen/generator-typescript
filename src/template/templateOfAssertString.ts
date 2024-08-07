import type { IConfig } from '../model/IConfig.js'

export function templateOfAssertString(config: IConfig) {
	return `import { AssertionError } from './AssertionError${
		config.importFileExtension ?? ''
	}'

export function assertString( value: any, isNullable : true   , path?: string ): asserts value is string | null | undefined
export function assertString( value: any, isNullable?: boolean, path?: string ): asserts value is string
export function assertString( value: any, isNullable?: boolean, path?: string ) {
	if (value == null) {
		if (!isNullable) {
			throw new AssertionError(\`Expected string, got null (at \${path})\`)
		}
	} else {
		if (typeof value !== 'string') {
			throw new AssertionError(
				\`Expected string, got \${typeof value} (at \${path})\`,
			)
		}
	}
}
`
}
