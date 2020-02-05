export function templateOfUnionType({
	imports,
	name,
	aliases,
}: {
	imports: string
	name: string
	aliases: string
}) {
	return `${imports}

export type ${name} =
${aliases}
`
}
