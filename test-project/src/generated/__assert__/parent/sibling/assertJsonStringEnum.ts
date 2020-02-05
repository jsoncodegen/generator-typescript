import { JsonStringEnum as parent_sibling_JsonStringEnum } from "../../../__type__/parent/sibling/JsonStringEnum"
import { assertStringEnumValue as __assert_utility___assertStringEnumValue } from "../../../__assert_utility__/assertStringEnumValue"

const __VALUES__ = [
	parent_sibling_JsonStringEnum.Name,
	parent_sibling_JsonStringEnum.NameWithDescription,
	parent_sibling_JsonStringEnum.NameOfEmptyValue
]

export function assertJsonStringEnum( o: any, isNullable:  true,    path?: string ): asserts o is parent_sibling_JsonStringEnum | null | undefined
export function assertJsonStringEnum( o: any, isNullable?: boolean, path?: string ): asserts o is parent_sibling_JsonStringEnum
export function assertJsonStringEnum( o: any, isNullable?: boolean, path : string = 'parent_sibling_JsonStringEnum' ) {
	__assert_utility___assertStringEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
