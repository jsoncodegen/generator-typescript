import { JsonNumberEnum as parent_sibling_JsonNumberEnum } from "../../../__type__/parent/sibling/JsonNumberEnum.js"
import { assertNumberEnumValue as __assert_utility___assertNumberEnumValue } from "../../../__assert_utility__/assertNumberEnumValue.js"

const __VALUES__ = [
	parent_sibling_JsonNumberEnum.Name,
	parent_sibling_JsonNumberEnum.NameWithDescription,
	parent_sibling_JsonNumberEnum.NameOfFractionValue
]

export function assertJsonNumberEnum( o: any, isNullable:  true,    path?: string ): asserts o is parent_sibling_JsonNumberEnum | null | undefined
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path?: string ): asserts o is parent_sibling_JsonNumberEnum
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path : string = 'parent_sibling_JsonNumberEnum' ) {
	__assert_utility___assertNumberEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
