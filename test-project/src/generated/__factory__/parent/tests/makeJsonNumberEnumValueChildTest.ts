import type { JsonNumberEnumValueChildTest as __type___parent_tests_JsonNumberEnumValueChildTest } from "../../../__type__/parent/tests/JsonNumberEnumValueChildTest.js"
import { JsonNumberEnum as __type___parent_tests_child_JsonNumberEnum } from "../../../__type__/parent/tests/child/JsonNumberEnum.js"

export function makeJsonNumberEnumValueChildTest(props: Omit<__type___parent_tests_JsonNumberEnumValueChildTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonNumberEnumValueChildTest {
	return {
		...props,
		enumValue: __type___parent_tests_child_JsonNumberEnum.Name,
		enumValueWithDescription: __type___parent_tests_child_JsonNumberEnum.Name,
	}
}