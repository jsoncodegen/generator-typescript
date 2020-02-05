import { JsonStringEnum } from './generated/__type__/parent/tests/JsonStringEnum'

it(`[q1l6qq] Serializes and deserializes.`, () => {
	const value = [
		JsonStringEnum.Name,
		JsonStringEnum.NameWithDescription,
		JsonStringEnum.NameOfEmptyValue,
	]
	const json = JSON.stringify(value)
	const value2 = JSON.parse(json)
	expect(value).toEqual(value2)
})
