import { makeJsonBooleanTest } from './generated/__factory__/parent/tests/makeJsonBooleanTest'

it('[q1l6xr] Serializes and deserializes.', () => {
	const obj = makeJsonBooleanTest({
		flag: true,
		flagWithDescription: true,
		arrayOfFlags: [],
		arrayOfFlagsAndNulls: [],
		mapOfFlags: {},
		arrayOfMapsOfFlags: [],
		arrayOfMapsOfNullsAndFlags: [],
		arrayOfNullsAndMapsOfFlags: [],
		mapOfArraysOfFlags: {},
		mapOfArraysOfNullsAndFlags: {},
		mapOfNullsAndArraysOfFlags: {},
		mapOfNullsAndFlags: {},
	})
	const json = JSON.stringify(obj)
	const obj2 = JSON.parse(json)
	expect(obj).toEqual(obj2)
})
