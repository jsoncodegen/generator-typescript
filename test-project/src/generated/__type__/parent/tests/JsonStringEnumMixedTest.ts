import { JsonStringEnum as __type___JsonStringEnum } from "../../JsonStringEnum.js"
import { JsonStringEnum as __type___parent_JsonStringEnum } from "../JsonStringEnum.js"
import { JsonStringEnum as __type___parent_sibling_JsonStringEnum } from "../sibling/JsonStringEnum.js"
import { JsonStringEnum as __type___parent_tests_JsonStringEnum } from "./JsonStringEnum.js"
import { JsonStringEnum as __type___parent_tests_child_JsonStringEnum } from "./child/JsonStringEnum.js"

/**
 * This tests string enum fields.
 */

export interface JsonStringEnumMixedTest {
	readonly child: __type___parent_tests_child_JsonStringEnum
	readonly local: __type___parent_tests_JsonStringEnum
	readonly parent: __type___parent_JsonStringEnum
	readonly root: __type___JsonStringEnum
	readonly sibling: __type___parent_sibling_JsonStringEnum
}