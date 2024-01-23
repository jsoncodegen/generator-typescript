import { joinArrayWith } from './joinArrayWith.js'

export function joinWith(separator: string) {
	const joiner = joinArrayWith(separator)
	return (...rest: any[]) => joiner(rest)
}
