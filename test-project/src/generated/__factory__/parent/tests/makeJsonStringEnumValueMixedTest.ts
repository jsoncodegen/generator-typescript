import { JsonStringEnum as __type___JsonStringEnum } from "../../../__type__/JsonStringEnum"
import { JsonStringEnum as __type___parent_JsonStringEnum } from "../../../__type__/parent/JsonStringEnum"
import { JsonStringEnum as __type___parent_sibling_JsonStringEnum } from "../../../__type__/parent/sibling/JsonStringEnum"
import { JsonStringEnum as __type___parent_tests_JsonStringEnum } from "../../../__type__/parent/tests/JsonStringEnum"
import { JsonStringEnum as __type___parent_tests_child_JsonStringEnum } from "../../../__type__/parent/tests/child/JsonStringEnum"
import { JsonStringEnumValueMixedTest as __type___parent_tests_JsonStringEnumValueMixedTest } from "../../../__type__/parent/tests/JsonStringEnumValueMixedTest"

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