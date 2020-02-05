export function templateOfAssertionError() {
	return `export class AssertionError extends Error {
	constructor(message: string) {
		super(message)
	}
}
`
}
