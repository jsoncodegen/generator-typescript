import { joinArrayWith } from './joinArrayWith'

export function joinWith(separator: string) {
	const joiner = joinArrayWith(separator)
	return (...rest: any[]) => joiner(rest)
}
