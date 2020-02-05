export function templateOfFactory({
	imports,
	interfaceName,
	interfaceAlias,
	paramType,
	declareProps,
}: {
	imports: string
	interfaceName: string
	interfaceAlias: string
	paramType: string
	declareProps: string
}) {
	return `${imports}

export function make${interfaceName}(props: ${paramType}): ${interfaceAlias} {
${
	declareProps
		? `\treturn {\n\t\t...props,\n${declareProps}\n\t}`
		: `\treturn props`
}
}`
}
