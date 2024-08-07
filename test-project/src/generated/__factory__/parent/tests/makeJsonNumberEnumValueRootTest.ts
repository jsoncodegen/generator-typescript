import type { JsonNumberEnumValueRootTest as __type___parent_tests_JsonNumberEnumValueRootTest } from "../../../__type__/parent/tests/JsonNumberEnumValueRootTest.js"
import { JsonNumberEnum as __type___JsonNumberEnum } from "../../../__type__/JsonNumberEnum.js"

export function makeJsonNumberEnumValueRootTest(props: Omit<__type___parent_tests_JsonNumberEnumValueRootTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonNumberEnumValueRootTest {
	return {
		...props,
		enumValue: __type___JsonNumberEnum.Name,
		enumValueWithDescription: __type___JsonNumberEnum.Name,
	}
}