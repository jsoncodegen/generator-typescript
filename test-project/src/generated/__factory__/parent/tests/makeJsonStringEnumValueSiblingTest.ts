import { JsonStringEnum as __type___parent_sibling_JsonStringEnum } from "../../../__type__/parent/sibling/JsonStringEnum.js"
import { JsonStringEnumValueSiblingTest as __type___parent_tests_JsonStringEnumValueSiblingTest } from "../../../__type__/parent/tests/JsonStringEnumValueSiblingTest.js"

export function makeJsonStringEnumValueSiblingTest(props: Omit<__type___parent_tests_JsonStringEnumValueSiblingTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonStringEnumValueSiblingTest {
	return {
		...props,
		enumValue: __type___parent_sibling_JsonStringEnum.Name,
		enumValueWithDescription: __type___parent_sibling_JsonStringEnum.Name,
	}
}