import { indent } from '../fun/indent.js'

export function templateOfAssertInterface({
	imports,
	assertions,
	interfaceName,
	interfaceAlias,
	assertionErrorAlias,
}: {
	imports: string
	assertions: string
	interfaceName: string
	interfaceAlias: string
	assertionErrorAlias: string
}) {
	return `${imports}

export function assert${interfaceName}( o: any, isNullable : true   , path?: string ): asserts o is ${interfaceAlias} | null | undefined
export function assert${interfaceName}( o: any, isNullable?: boolean, path?: string ): asserts o is ${interfaceAlias}
export function assert${interfaceName}( o: any, isNullable?: boolean, path : string = '${interfaceAlias}' ) {
	if (o == null) {
		if (!isNullable) {
			throw new ${assertionErrorAlias}(\`Expected ${interfaceAlias}, got null (at \${path})\`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new ${assertionErrorAlias}(
				\`Expected ${interfaceAlias}, got \${typeof o} (at \${path})\`,
			)
		}
${indent(indent(assertions))}
	}
}
`
}
