import { JsonNumberEnum as __type___parent_tests_JsonNumberEnum } from "../../../__type__/parent/tests/JsonNumberEnum"
import { JsonNumberEnumValueLocalTest as __type___parent_tests_JsonNumberEnumValueLocalTest } from "../../../__type__/parent/tests/JsonNumberEnumValueLocalTest"

export function makeJsonNumberEnumValueLocalTest(props: Omit<__type___parent_tests_JsonNumberEnumValueLocalTest, "enumValue" | "enumValueWithDescription">): __type___parent_tests_JsonNumberEnumValueLocalTest {
	return {
		...props,
		enumValue: __type___parent_tests_JsonNumberEnum.Name,
		enumValueWithDescription: __type___parent_tests_JsonNumberEnum.Name,
	}
}