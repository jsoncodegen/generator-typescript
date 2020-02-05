import { JsonNumberEnum as __type___JsonNumberEnum } from "../../JsonNumberEnum"
import { JsonNumberEnum as __type___parent_JsonNumberEnum } from "../JsonNumberEnum"
import { JsonNumberEnum as __type___parent_sibling_JsonNumberEnum } from "../sibling/JsonNumberEnum"
import { JsonNumberEnum as __type___parent_tests_JsonNumberEnum } from "./JsonNumberEnum"
import { JsonNumberEnum as __type___parent_tests_child_JsonNumberEnum } from "./child/JsonNumberEnum"

/**
 * This tests number enum value fields.
 */

export interface JsonNumberEnumValueMixedTest {
	readonly child: __type___parent_tests_child_JsonNumberEnum.Name
	readonly local: __type___parent_tests_JsonNumberEnum.Name
	readonly parent: __type___parent_JsonNumberEnum.Name
	readonly root: __type___JsonNumberEnum.Name
	readonly sibling: __type___parent_sibling_JsonNumberEnum.Name
}