import { JsonNumberEnum as __type___JsonNumberEnum } from "../../JsonNumberEnum"
import { JsonNumberEnum as __type___parent_JsonNumberEnum } from "../JsonNumberEnum"
import { JsonNumberEnum as __type___parent_sibling_JsonNumberEnum } from "../sibling/JsonNumberEnum"
import { JsonNumberEnum as __type___parent_tests_JsonNumberEnum } from "./JsonNumberEnum"
import { JsonNumberEnum as __type___parent_tests_child_JsonNumberEnum } from "./child/JsonNumberEnum"

/**
 * This tests number enum fields.
 */

export interface JsonNumberEnumMixedTest {
	readonly child: __type___parent_tests_child_JsonNumberEnum
	readonly local: __type___parent_tests_JsonNumberEnum
	readonly parent: __type___parent_JsonNumberEnum
	readonly root: __type___JsonNumberEnum
	readonly sibling: __type___parent_sibling_JsonNumberEnum
}