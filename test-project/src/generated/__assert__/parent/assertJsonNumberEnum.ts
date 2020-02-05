import { JsonNumberEnum as parent_JsonNumberEnum } from "../../__type__/parent/JsonNumberEnum"
import { assertNumberEnumValue as __assert_utility___assertNumberEnumValue } from "../../__assert_utility__/assertNumberEnumValue"

const __VALUES__ = [
	parent_JsonNumberEnum.Name,
	parent_JsonNumberEnum.NameWithDescription,
	parent_JsonNumberEnum.NameOfFractionValue
]

export function assertJsonNumberEnum( o: any, isNullable:  true,    path?: string ): asserts o is parent_JsonNumberEnum | null | undefined
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path?: string ): asserts o is parent_JsonNumberEnum
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path : string = 'parent_JsonNumberEnum' ) {
	__assert_utility___assertNumberEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
