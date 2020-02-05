import { assertFoo, Foo, MyNumberEnum, MyStringEnum } from './assert'

const validFoo: Foo = {
	flag: true,
	flagOrNull: null,
	count: 0,
	countOrNull: null,
	name: '',
	nameOrNull: null,
	mapOfFlags: { foo: true },
	mapOfArrayOfFlags: { foo: [true] },
	arrayOfNames: [''],
	arrayOfMapOfNames: [{ foo: '' }],
	bar: { flag: true },
	stringEnum: MyStringEnum.AnotherName,
	numberEnum: MyNumberEnum.AnotherName,
	stringKind: MyStringEnum.Name,
	numberKind: MyNumberEnum.Name,
}

it(`[q1mvn4] Does not throw on valid object.`, () => {
	expect(() => assertFoo(validFoo)).not.toThrow()
})

it(`[q1mwf7] Throws on flag missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			flag: null,
		}),
	).toThrow(`Expected boolean, got null (at Foo.flag)`)
})

it(`[q1mwjq] Throws on count missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			count: null,
		}),
	).toThrow(`Expected number, got null (at Foo.count)`)
})

it(`[q1mwnt] Throws on name missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			name: null,
		}),
	).toThrow(`Expected string, got null (at Foo.name)`)
})

it(`[q1mwoh] Throws on mapOfFlags missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			mapOfFlags: null,
		}),
	).toThrow(`Expected map, got null (at Foo.mapOfFlags)`)
})

it(`[q1mwt9] Throws on mapOfFlags item missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			mapOfFlags: { foo: null },
		}),
	).toThrow(`Expected boolean, got null (at Foo.mapOfFlags.foo)`)
})

it(`[q1mwv2] Throws on mapOfArrayOfFlags item missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			mapOfArrayOfFlags: { foo: null },
		}),
	).toThrow(`Expected array, got null (at Foo.mapOfArrayOfFlags.foo)`)
})

it(`[q1mwwo] Throws on arrayOfNames missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			arrayOfNames: null,
		}),
	).toThrow(`Expected array, got null (at Foo.arrayOfNames)`)
})

it(`[q1mynn] Throws on arrayOfNames item missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			arrayOfNames: [null],
		}),
	).toThrow(`Expected string, got null (at Foo.arrayOfNames[0])`)
})

it(`[q1myn9] Throws on arrayOfMapOfNames item missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			arrayOfMapOfNames: [null],
		}),
	).toThrow(`Expected map, got null (at Foo.arrayOfMapOfNames[0])`)
})

it(`[q1myqm] Throws on arrayOfMapOfNames map item missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			arrayOfMapOfNames: [{ foo: null }],
		}),
	).toThrow(`Expected string, got null (at Foo.arrayOfMapOfNames[0].foo)`)
})

it(`[q1mykp] Throws on bar missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			bar: null,
		}),
	).toThrow(`Expected Bar, got null (at Foo.bar:Bar)`)
})

it(`[q1mysi] Throws on bar field missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			bar: { flag: null },
		}),
	).toThrow(`Expected boolean, got null (at Foo.bar:Bar.flag)`)
})

it(`[q1n09m] Throws on stringEnum missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			stringEnum: null,
		}),
	).toThrow(`Expected string enum, got null (at Foo.stringEnum:MyStringEnum)`)
})

it(`[q1n09m] Throws on numberEnum missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			numberEnum: null,
		}),
	).toThrow(`Expected number enum, got null (at Foo.numberEnum:MyNumberEnum)`)
})

it(`[q1ox74] Throws on stringKind missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			stringKind: null,
		}),
	).toThrow(`Expected Value, got null (at Foo.stringKind:MyStringEnum.Name)`)
})

it(`[q1ox76] Throws on numberKind missing.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			numberKind: null,
		}),
	).toThrow(`Expected 0, got null (at Foo.numberKind:MyNumberEnum.Name)`)
})

it(`[q1owkk] Throws on wrong stringKind.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			stringKind: MyStringEnum.AnotherName,
		}),
	).toThrow(
		`Expected Value, got AnotherValue (at Foo.stringKind:MyStringEnum.Name)`,
	)
})

it(`[q1ox4u] Throws on wrong numberKind.`, () => {
	expect(() =>
		assertFoo({
			...validFoo,
			numberKind: MyNumberEnum.AnotherName,
		}),
	).toThrow(`Expected 0, got 1.1 (at Foo.numberKind:MyNumberEnum.Name)`)
})
