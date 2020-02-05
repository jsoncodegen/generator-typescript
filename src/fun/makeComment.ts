export function makeComment(c: string) {
	return c
		? `/**\n${c.replace(/\*\//g, '* /').replace(/^/gm, ` * `)}\n */`
		: ''
}
