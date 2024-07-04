import type { IConfig } from '../model/IConfig.js'

export function templateOfAssertBoolean(config: IConfig) {
	return `import { AssertionError } from './AssertionError${
		config.importFileExtension ?? ''
	}'

export function assertBoolean( value: any, isNullable : true   , path?: string ): asserts value is boolean | null | undefined
export function assertBoolean( value: any, isNullable?: boolean, path?: string ): asserts value is boolean
export function assertBoolean( value: any, isNullable?: boolean, path?: string ) {
	if (value == null) {
		if (!isNullable) {
			throw new AssertionError(\`Expected boolean, got null (at \${path})\`)
		}
	} else {
		if (typeof value !== 'boolean') {
			throw new AssertionError(
				\`Expected boolean, got \${typeof value} (at \${path})\`,
			)
		}
	}
}
`
}
