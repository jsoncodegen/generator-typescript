import { JsonNumberEnum as JsonNumberEnum } from "../__type__/JsonNumberEnum"
import { assertNumberEnumValue as __assert_utility___assertNumberEnumValue } from "../__assert_utility__/assertNumberEnumValue"

const __VALUES__ = [
	JsonNumberEnum.Name,
	JsonNumberEnum.NameWithDescription,
	JsonNumberEnum.NameOfFractionValue
]

export function assertJsonNumberEnum( o: any, isNullable:  true,    path?: string ): asserts o is JsonNumberEnum | null | undefined
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path?: string ): asserts o is JsonNumberEnum
export function assertJsonNumberEnum( o: any, isNullable?: boolean, path : string = 'JsonNumberEnum' ) {
	__assert_utility___assertNumberEnumValue(
		__VALUES__,
		o,
		isNullable,
		path,
	)
}
