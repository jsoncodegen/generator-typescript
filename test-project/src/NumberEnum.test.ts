import { JsonNumberEnum } from './generated/__type__/parent/tests/JsonNumberEnum'

it(`[q1l6yv] Serializes and deserializes.`, () => {
	const value = [
		JsonNumberEnum.Name,
		JsonNumberEnum.NameWithDescription,
		JsonNumberEnum.NameOfFractionValue,
	]
	const json = JSON.stringify(value)
	const value2 = JSON.parse(json)
	expect(value).toEqual(value2)
})
