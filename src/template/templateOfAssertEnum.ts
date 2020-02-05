export function templateOfAssertEnum({
	enumName,
	enumAlias,
	imports,
	assertFunAlias,
	values,
}: {
	enumName: string
	enumAlias: string
	imports: string
	assertFunAlias: string
	values: string
}) {
	return `${imports}

const __VALUES__ = ${values}

export function assert${enumName}( o: any, isNullable:  true,    path?: string ): asserts o is ${enumAlias} | null | undefined
export function assert${enumName}( o: any, isNullable?: boolean, path?: string ): asserts o is ${enumAlias}
export function assert${enumName}( o: any, isNullable?: boolean, path : string = '${enumAlias}' ) {
	${assertFunAlias}(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
`
}
