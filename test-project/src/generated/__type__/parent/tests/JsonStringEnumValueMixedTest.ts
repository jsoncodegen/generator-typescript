import { JsonStringEnum as __type___JsonStringEnum } from "../../JsonStringEnum.js"
import { JsonStringEnum as __type___parent_JsonStringEnum } from "../JsonStringEnum.js"
import { JsonStringEnum as __type___parent_sibling_JsonStringEnum } from "../sibling/JsonStringEnum.js"
import { JsonStringEnum as __type___parent_tests_JsonStringEnum } from "./JsonStringEnum.js"
import { JsonStringEnum as __type___parent_tests_child_JsonStringEnum } from "./child/JsonStringEnum.js"

/**
 * This tests string enum value fields.
 */

export interface JsonStringEnumValueMixedTest {
	readonly child: __type___parent_tests_child_JsonStringEnum.Name
	readonly local: __type___parent_tests_JsonStringEnum.Name
	readonly parent: __type___parent_JsonStringEnum.Name
	readonly root: __type___JsonStringEnum.Name
	readonly sibling: __type___parent_sibling_JsonStringEnum.Name
}