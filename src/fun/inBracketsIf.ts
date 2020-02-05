export function inBracketsIf(condition: any) {
	return (s: string) => (condition ? `(${s})` : s)
}
