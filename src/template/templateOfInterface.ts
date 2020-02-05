export function templateOfInterface({
	interfaceName,
	fieldDeclarations,
}: {
	interfaceName: string
	fieldDeclarations: string
}) {
	return `export interface ${interfaceName} {
${fieldDeclarations}
}`
}
