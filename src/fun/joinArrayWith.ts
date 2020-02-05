export function joinArrayWith(separator: string) {
	return (a: any[]) => a.filter(Boolean).join(separator)
}
