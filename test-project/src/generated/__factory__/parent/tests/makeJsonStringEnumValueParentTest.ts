import type { JsonStringEnumValueParentTest as __type___parent_tests_JsonStringEnumValueParentTest } from "../../../__type__/parent/tests/JsonStringEnumValueParentTest.js"
import { JsonStringEnum as __type___parent_JsonStringEnum } from "../../../__type__/parent/JsonStringEnum.js"

export function makeJsonStringEnumValueParentTest(props: Omit<__type___parent_tests_JsonStringEnumValueParentTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonStringEnumValueParentTest {
	return {
		...props,
		enumValue: __type___parent_JsonStringEnum.Name,
		enumValueWithDescription: __type___parent_JsonStringEnum.Name,
	}
}