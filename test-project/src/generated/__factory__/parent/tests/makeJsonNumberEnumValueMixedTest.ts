import type { JsonNumberEnumValueMixedTest as __type___parent_tests_JsonNumberEnumValueMixedTest } from "../../../__type__/parent/tests/JsonNumberEnumValueMixedTest.js"
import { JsonNumberEnum as __type___JsonNumberEnum } from "../../../__type__/JsonNumberEnum.js"
import { JsonNumberEnum as __type___parent_JsonNumberEnum } from "../../../__type__/parent/JsonNumberEnum.js"
import { JsonNumberEnum as __type___parent_sibling_JsonNumberEnum } from "../../../__type__/parent/sibling/JsonNumberEnum.js"
import { JsonNumberEnum as __type___parent_tests_JsonNumberEnum } from "../../../__type__/parent/tests/JsonNumberEnum.js"
import { JsonNumberEnum as __type___parent_tests_child_JsonNumberEnum } from "../../../__type__/parent/tests/child/JsonNumberEnum.js"

export function makeJsonNumberEnumValueMixedTest(props: Omit<__type___parent_tests_JsonNumberEnumValueMixedTest, "child" | "local" | "parent" | "root" | "sibling">): __type___parent_tests_JsonNumberEnumValueMixedTest {
	return {
		...props,
		child: __type___parent_tests_child_JsonNumberEnum.Name,
		local: __type___parent_tests_JsonNumberEnum.Name,
		parent: __type___parent_JsonNumberEnum.Name,
		root: __type___JsonNumberEnum.Name,
		sibling: __type___parent_sibling_JsonNumberEnum.Name,
	}
}