export function templateOfImport({
	typeName,
	alias,
	path,
}: {
	typeName: string
	alias: string
	path: string
}) {
	return `import { ${typeName} as ${alias} } from ${JSON.stringify(path)}`
}
