export function templateOfAssertMap() {
	return `import { AssertionError } from './AssertionError'

export function assertMap( assertItem: (item: any, path: string) => void, map: any, isNullable : true   , path? : string ): asserts map is { [k: string]: any } | null | undefined
export function assertMap( assertItem: (item: any, path: string) => void, map: any, isNullable?: boolean, path? : string ): asserts map is { [k: string]: any }
export function assertMap( assertItem: (item: any, path: string) => void, map: any, isNullable?: boolean, path? : string ) {
	if (map == null) {
		if (!isNullable) {
			throw new AssertionError(\`Expected map, got null (at \${path})\`)
		}
	} else {
		if (typeof map !== 'object') {
			throw new AssertionError(
				\`Expected map, got \${typeof map} (at \${path})\`,
			)
		}
		for (const key of Object.keys(map)) {
			assertItem(map[key], path + \`.\${key}\`)
		}
	}
}
`
}
