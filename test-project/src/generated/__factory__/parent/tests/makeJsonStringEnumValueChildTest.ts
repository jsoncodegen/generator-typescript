import { JsonStringEnum as __type___parent_tests_child_JsonStringEnum } from "../../../__type__/parent/tests/child/JsonStringEnum.js"
import { JsonStringEnumValueChildTest as __type___parent_tests_JsonStringEnumValueChildTest } from "../../../__type__/parent/tests/JsonStringEnumValueChildTest.js"

export function makeJsonStringEnumValueChildTest(props: Omit<__type___parent_tests_JsonStringEnumValueChildTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonStringEnumValueChildTest {
	return {
		...props,
		enumValue: __type___parent_tests_child_JsonStringEnum.Name,
		enumValueWithDescription: __type___parent_tests_child_JsonStringEnum.Name,
	}
}