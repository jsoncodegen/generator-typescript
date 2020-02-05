export function templateOfEnum({
	enumName,
	enumValueDeclarations,
}: {
	enumName: string
	enumValueDeclarations: string
}) {
	return `export enum ${enumName} {
${enumValueDeclarations}
}`
}
