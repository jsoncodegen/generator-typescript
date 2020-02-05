export function indent(s: string) {
	return s.replace(/^(.+)/gm, '\t$1')
}
