import { JsonNumberEnum as __type___parent_sibling_JsonNumberEnum } from "../../../__type__/parent/sibling/JsonNumberEnum.js"
import { JsonNumberEnumValueSiblingTest as __type___parent_tests_JsonNumberEnumValueSiblingTest } from "../../../__type__/parent/tests/JsonNumberEnumValueSiblingTest.js"

export function makeJsonNumberEnumValueSiblingTest(props: Omit<__type___parent_tests_JsonNumberEnumValueSiblingTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonNumberEnumValueSiblingTest {
	return {
		...props,
		enumValue: __type___parent_sibling_JsonNumberEnum.Name,
		enumValueWithDescription: __type___parent_sibling_JsonNumberEnum.Name,
	}
}