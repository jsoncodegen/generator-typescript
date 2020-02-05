import { joinArrayWith } from './joinArrayWith'

export function join(...rest: any[]) {
	return joinArrayWith('')(rest)
}
