import { JsonInterface as __type___JsonInterface } from "../../JsonInterface.js"
import { JsonInterface as __type___parent_JsonInterface } from "../JsonInterface.js"
import { JsonInterface as __type___parent_sibling_JsonInterface } from "../sibling/JsonInterface.js"
import { JsonInterface as __type___parent_tests_JsonInterface } from "./JsonInterface.js"
import { JsonInterface as __type___parent_tests_child_JsonInterface } from "./child/JsonInterface.js"

/**
 * This tests interface fields.
 */

export interface JsonInterfaceMixedTest {
	readonly child: __type___parent_tests_child_JsonInterface
	readonly local: __type___parent_tests_JsonInterface
	readonly parent: __type___parent_JsonInterface
	readonly root: __type___JsonInterface
	readonly sibling: __type___parent_sibling_JsonInterface
}