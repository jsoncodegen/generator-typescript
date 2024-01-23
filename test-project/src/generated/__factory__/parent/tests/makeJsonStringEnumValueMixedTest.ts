import { JsonStringEnum as __type___JsonStringEnum } from "../../../__type__/JsonStringEnum.js"
import { JsonStringEnum as __type___parent_JsonStringEnum } from "../../../__type__/parent/JsonStringEnum.js"
import { JsonStringEnum as __type___parent_sibling_JsonStringEnum } from "../../../__type__/parent/sibling/JsonStringEnum.js"
import { JsonStringEnum as __type___parent_tests_JsonStringEnum } from "../../../__type__/parent/tests/JsonStringEnum.js"
import { JsonStringEnum as __type___parent_tests_child_JsonStringEnum } from "../../../__type__/parent/tests/child/JsonStringEnum.js"
import { JsonStringEnumValueMixedTest as __type___parent_tests_JsonStringEnumValueMixedTest } from "../../../__type__/parent/tests/JsonStringEnumValueMixedTest.js"

export function makeJsonStringEnumValueMixedTest(props: Omit<__type___parent_tests_JsonStringEnumValueMixedTest, "child" | "local" | "parent" | "root" | "sibling">): __type___parent_tests_JsonStringEnumValueMixedTest {
	return {
		...props,
		child: __type___parent_tests_child_JsonStringEnum.Name,
		local: __type___parent_tests_JsonStringEnum.Name,
		parent: __type___parent_JsonStringEnum.Name,
		root: __type___JsonStringEnum.Name,
		sibling: __type___parent_sibling_JsonStringEnum.Name,
	}
}