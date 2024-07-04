import type { JsonStringEnumValueRootTest as __type___parent_tests_JsonStringEnumValueRootTest } from "../../../__type__/parent/tests/JsonStringEnumValueRootTest.js"
import { JsonStringEnum as __type___JsonStringEnum } from "../../../__type__/JsonStringEnum.js"

export function makeJsonStringEnumValueRootTest(props: Omit<__type___parent_tests_JsonStringEnumValueRootTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonStringEnumValueRootTest {
	return {
		...props,
		enumValue: __type___JsonStringEnum.Name,
		enumValueWithDescription: __type___JsonStringEnum.Name,
	}
}