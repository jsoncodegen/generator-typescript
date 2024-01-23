import { JsonStringEnum as __type___JsonStringEnum } from "../../../__type__/JsonStringEnum.js"
import { JsonStringEnumValueRootTest as __type___parent_tests_JsonStringEnumValueRootTest } from "../../../__type__/parent/tests/JsonStringEnumValueRootTest.js"

export function makeJsonStringEnumValueRootTest(props: Omit<__type___parent_tests_JsonStringEnumValueRootTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonStringEnumValueRootTest {
	return {
		...props,
		enumValue: __type___JsonStringEnum.Name,
		enumValueWithDescription: __type___JsonStringEnum.Name,
	}
}