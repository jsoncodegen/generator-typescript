import type { JsonStringEnumValueLocalTest as __type___parent_tests_JsonStringEnumValueLocalTest } from "../../../__type__/parent/tests/JsonStringEnumValueLocalTest.js"
import { JsonStringEnum as __type___parent_tests_JsonStringEnum } from "../../../__type__/parent/tests/JsonStringEnum.js"

export function makeJsonStringEnumValueLocalTest(props: Omit<__type___parent_tests_JsonStringEnumValueLocalTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonStringEnumValueLocalTest {
	return {
		...props,
		enumValue: __type___parent_tests_JsonStringEnum.Name,
		enumValueWithDescription: __type___parent_tests_JsonStringEnum.Name,
	}
}