import { joinArrayWith } from './joinArrayWith.js'

export function join(...rest: any[]) {
	return joinArrayWith('')(rest)
}
