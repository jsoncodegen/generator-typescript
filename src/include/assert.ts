export interface Foo {
	readonly flag: boolean
	readonly flagOrNull: boolean | null | undefined
	readonly count: number
	readonly countOrNull: number | null | undefined
	readonly name: string
	readonly nameOrNull: string | null | undefined
	readonly mapOfFlags: { readonly [k: string]: boolean }
	readonly mapOfArrayOfFlags: { readonly [k: string]: readonly boolean[] }
	readonly arrayOfNames: readonly string[]
	readonly arrayOfMapOfNames: readonly { readonly [k: string]: string }[]
	readonly bar: Bar
	readonly stringEnum: MyStringEnum
	readonly numberEnum: MyNumberEnum
	readonly stringKind: MyStringEnum.Name
	readonly numberKind: MyNumberEnum.Name
}

export interface Bar {
	flag: boolean
}

export enum MyStringEnum {
	Name = 'Value',
	AnotherName = 'AnotherValue',
}

export enum MyNumberEnum {
	Name = 0,
	AnotherName = 1.1,
}

export function assertFoo(
	o: any,
	isNullable: true,
	path?: string,
): asserts o is Foo | null | undefined
export function assertFoo(
	o: any,
	isNullable?: boolean,
	path?: string,
): asserts o is Foo
export function assertFoo(o: any, isNullable?: boolean, path: string = 'Foo') {
	if (o == null) {
		if (!isNullable) {
			throw new AssertionError(`Expected Foo, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new AssertionError(
				`Expected Foo, got ${typeof o} (at ${path})`,
			)
		}
		assertBoolean(o.flag, false, path + `.flag`)
		assertBoolean(o.flagOrNull, true, path + `.flagOrNull`)
		assertNumber(o.count, false, path + `.count`)
		assertNumber(o.countOrNull, true, path + `.countOrNull`)
		assertString(o.name, false, path + `.name`)
		assertString(o.nameOrNull, true, path + `.nameOrNull`)
		assertMap(
			(value, path) => assertBoolean(value, false, path),
			o.mapOfFlags,
			false,
			path + `.mapOfFlags`,
		)
		assertMap(
			(value, path) =>
				assertArray(
					(value, path) => assertBoolean(value, false, path),
					value,
					false,
					path,
				),
			o.mapOfArrayOfFlags,
			false,
			path + `.mapOfArrayOfFlags`,
		)
		assertArray(
			(value, path) => assertString(value, false, path),
			o.arrayOfNames,
			false,
			path + `.arrayOfNames`,
		)
		assertArray(
			(value, path) =>
				assertMap(
					(value, path) => assertString(value, false, path),
					value,
					false,
					path,
				),
			o.arrayOfMapOfNames,
			false,
			path + `.arrayOfMapOfNames`,
		)
		assertBar(o.bar, false, path + `.bar:Bar`)
		assertMyStringEnum(
			o.stringEnum,
			false,
			path + `.stringEnum:MyStringEnum`,
		)
		assertMyNumberEnum(
			o.numberEnum,
			false,
			path + `.numberEnum:MyNumberEnum`,
		)
		assertExactValue(
			MyStringEnum.Name,
			o.stringKind,
			false,
			path + `.stringKind:MyStringEnum.Name`,
		)
		assertExactValue(
			MyNumberEnum.Name,
			o.numberKind,
			false,
			path + `.numberKind:MyNumberEnum.Name`,
		)
	}
}

export function assertBar(
	o: any,
	isNullable: true,
	path?: string,
): asserts o is Bar | null | undefined
export function assertBar(
	o: any,
	isNullable?: boolean,
	path?: string,
): asserts o is Bar
export function assertBar(o: any, isNullable?: boolean, path: string = 'Bar') {
	if (o == null) {
		if (!isNullable) {
			throw new AssertionError(`Expected Bar, got null (at ${path})`)
		}
	} else {
		if (typeof o !== 'object') {
			throw new AssertionError(
				`Expected Bar, got ${typeof o} (at ${path})`,
			)
		}
		assertBoolean(o.flag, false, path + `.flag`)
	}
}

export function assertMyStringEnum(
	o: any,
	isNullable: true,
	path?: string,
): asserts o is MyStringEnum | null | undefined
export function assertMyStringEnum(
	o: any,
	isNullable?: boolean,
	path?: string,
): asserts o is MyStringEnum
export function assertMyStringEnum(
	o: any,
	isNullable?: boolean,
	path: string = 'MyStringEnum',
) {
	assertStringEnumValue(
		[MyStringEnum.Name, MyStringEnum.AnotherName],
		o,
		isNullable,
		path,
	)
}

export function assertMyNumberEnum(
	o: any,
	isNullable: true,
	path?: string,
): asserts o is MyNumberEnum | null | undefined
export function assertMyNumberEnum(
	o: any,
	isNullable?: boolean,
	path?: string,
): asserts o is MyNumberEnum
export function assertMyNumberEnum(
	o: any,
	isNullable?: boolean,
	path: string = 'MyNumberEnum',
) {
	assertNumberEnumValue(
		[MyNumberEnum.Name, MyNumberEnum.AnotherName],
		o,
		isNullable,
		path,
	)
}

class AssertionError extends Error {
	constructor(message: string) {
		super(message)
	}
}

export function assertMap(
	assertItem: (item: any, path: string) => void,
	map: any,
	isNullable: true,
	path?: string,
): asserts map is { [k: string]: any } | null | undefined
export function assertMap(
	assertItem: (item: any, path: string) => void,
	map: any,
	isNullable?: boolean,
	path?: string,
): asserts map is { [k: string]: any }
export function assertMap(
	assertItem: (item: any, path: string) => void,
	map: any,
	isNullable?: boolean,
	path?: string,
) {
	if (map == null) {
		if (!isNullable) {
			throw new AssertionError(`Expected map, got null (at ${path})`)
		}
	} else {
		if (typeof map !== 'object') {
			throw new AssertionError(
				`Expected map, got ${typeof map} (at ${path})`,
			)
		}
		for (const key of Object.keys(map)) {
			assertItem(map[key], path + `.${key}`)
		}
	}
}

export function assertArray(
	assertItem: (item: any, path: string) => void,
	array: any,
	isNullable: true,
	path?: string,
): asserts array is any[] | null | undefined
export function assertArray(
	assertItem: (item: any, path: string) => void,
	array: any,
	isNullable?: boolean,
	path?: string,
): asserts array is any[]
export function assertArray(
	assertItem: (item: any, path: string) => void,
	array: any,
	isNullable?: boolean,
	path?: string,
) {
	if (array == null) {
		if (!isNullable) {
			throw new AssertionError(`Expected array, got null (at ${path})`)
		}
	} else {
		if (!Array.isArray(array)) {
			throw new AssertionError(
				`Expected array, got ${typeof array} (at ${path})`,
			)
		}
		for (let i = 0; i < array.length; i++) {
			const item = array[i]
			assertItem(item, path + `[${i}]`)
		}
	}
}

export function assertBoolean(
	value: any,
	isNullable: true,
	path?: string,
): asserts value is boolean | null | undefined
export function assertBoolean(
	value: any,
	isNullable?: boolean,
	path?: string,
): asserts value is boolean
export function assertBoolean(value: any, isNullable?: boolean, path?: string) {
	if (value == null) {
		if (!isNullable) {
			throw new AssertionError(`Expected boolean, got null (at ${path})`)
		}
	} else {
		if (typeof value !== 'boolean') {
			throw new AssertionError(
				`Expected boolean, got ${typeof value} (at ${path})`,
			)
		}
	}
}

export function assertString(
	value: any,
	isNullable: true,
	path?: string,
): asserts value is string | null | undefined
export function assertString(
	value: any,
	isNullable?: boolean,
	path?: string,
): asserts value is string
export function assertString(value: any, isNullable?: boolean, path?: string) {
	if (value == null) {
		if (!isNullable) {
			throw new AssertionError(`Expected string, got null (at ${path})`)
		}
	} else {
		if (typeof value !== 'string') {
			throw new AssertionError(
				`Expected string, got ${typeof value} (at ${path})`,
			)
		}
	}
}

export function assertNumber(
	value: any,
	isNullable: true,
	path?: string,
): asserts value is number | null | undefined
export function assertNumber(
	value: any,
	isNullable?: boolean,
	path?: string,
): asserts value is number
export function assertNumber(value: any, isNullable?: boolean, path?: string) {
	if (value == null) {
		if (!isNullable) {
			throw new AssertionError(`Expected number, got null (at ${path})`)
		}
	} else {
		if (typeof value !== 'number') {
			throw new AssertionError(
				`Expected number, got ${typeof value} (at ${path})`,
			)
		}
		if (isNaN(value)) {
			throw new AssertionError(`Expected number, got NaN (at ${path})`)
		}
		if (!isFinite(value)) {
			throw new AssertionError(
				`Expected number, got ${value} (at ${path})`,
			)
		}
	}
}

export function assertStringEnumValue(
	expected: string[],
	actual: any,
	isNullable: true,
	path?: string,
): asserts actual is string | null | undefined
export function assertStringEnumValue(
	expected: string[],
	actual: any,
	isNullable?: boolean,
	path?: string,
): asserts actual is string
export function assertStringEnumValue(
	expected: string[],
	actual: any,
	isNullable?: boolean,
	path?: string,
) {
	if (actual == null) {
		if (!isNullable) {
			throw new AssertionError(
				`Expected string enum, got null (at ${path})`,
			)
		}
	} else {
		if (typeof actual !== 'string' || !expected.includes(actual)) {
			throw new AssertionError(
				`Expected string enum, got ${typeof actual} (at ${path})`,
			)
		}
	}
}

export function assertNumberEnumValue(
	expected: number[],
	actual: any,
	isNullable: true,
	path?: string,
): asserts actual is number | null | undefined
export function assertNumberEnumValue(
	expected: number[],
	actual: any,
	isNullable?: boolean,
	path?: string,
): asserts actual is number
export function assertNumberEnumValue(
	expected: number[],
	actual: any,
	isNullable?: boolean,
	path?: string,
) {
	if (actual == null) {
		if (!isNullable) {
			throw new AssertionError(
				`Expected number enum, got null (at ${path})`,
			)
		}
	} else {
		if (typeof actual !== 'number' || !expected.includes(actual)) {
			throw new AssertionError(
				`Expected number enum, got ${typeof actual} (at ${path})`,
			)
		}
	}
}

export function assertExactValue<T>(
	expected: T,
	actual: any,
	isNullable: true,
	path?: string,
): asserts actual is T | null | undefined
export function assertExactValue<T>(
	expected: T,
	actual: any,
	isNullable?: boolean,
	path?: string,
): asserts actual is T
export function assertExactValue<T>(
	expected: T,
	actual: any,
	isNullable?: boolean,
	path?: string,
) {
	if (actual == null) {
		if (!isNullable) {
			throw new AssertionError(
				`Expected ${expected}, got null (at ${path})`,
			)
		}
	} else {
		if (actual !== expected) {
			throw new AssertionError(
				`Expected ${expected}, got ${actual} (at ${path})`,
			)
		}
	}
}
