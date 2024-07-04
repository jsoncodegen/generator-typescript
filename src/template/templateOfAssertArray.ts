import type { IConfig } from '../model/IConfig.js'

export function templateOfAssertArray(config: IConfig) {
	return `import { AssertionError } from './AssertionError${
		config.importFileExtension ?? ''
	}'

export function assertArray( assertItem: (item: any, path: string) => void, array: any, isNullable : true   , path? : string ): asserts array is any[] | null | undefined
export function assertArray( assertItem: (item: any, path: string) => void, array: any, isNullable?: boolean, path? : string ): asserts array is any[]
export function assertArray( assertItem: (item: any, path: string) => void, array: any, isNullable?: boolean, path? : string ) {
	if (array == null) {
		if (!isNullable) {
			throw new AssertionError(\`Expected array, got null (at \${path})\`)
		}
	} else {
		if (!Array.isArray(array)) {
			throw new AssertionError(
				\`Expected array, got \${typeof array} (at \${path})\`,
			)
		}
		for (let i = 0; i < array.length; i++) {
			const item = array[i]
			assertItem(item, path + \`[\${i}]\`)
		}
	}
}
`
}
