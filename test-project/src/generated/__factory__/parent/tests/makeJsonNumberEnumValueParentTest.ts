import { JsonNumberEnum as __type___parent_JsonNumberEnum } from "../../../__type__/parent/JsonNumberEnum.js"
import { JsonNumberEnumValueParentTest as __type___parent_tests_JsonNumberEnumValueParentTest } from "../../../__type__/parent/tests/JsonNumberEnumValueParentTest.js"

export function makeJsonNumberEnumValueParentTest(props: Omit<__type___parent_tests_JsonNumberEnumValueParentTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonNumberEnumValueParentTest {
	return {
		...props,
		enumValue: __type___parent_JsonNumberEnum.Name,
		enumValueWithDescription: __type___parent_JsonNumberEnum.Name,
	}
}