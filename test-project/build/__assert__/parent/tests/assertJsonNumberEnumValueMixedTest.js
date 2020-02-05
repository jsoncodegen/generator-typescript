"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var JsonNumberEnum_1 = require("../../../__type__/JsonNumberEnum");
var JsonNumberEnum_2 = require("../../../__type__/parent/JsonNumberEnum");
var JsonNumberEnum_3 = require("../../../__type__/parent/sibling/JsonNumberEnum");
var JsonNumberEnum_4 = require("../../../__type__/parent/tests/JsonNumberEnum");
var JsonNumberEnum_5 = require("../../../__type__/parent/tests/child/JsonNumberEnum");
var assertExactValue_1 = require("../../../__assert_utility__/assertExactValue");
function assertJsonNumberEnumValueMixedTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonNumberEnumValueMixedTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonNumberEnumValueMixedTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonNumberEnumValueMixedTest, got " + typeof o + " (at " + path + ")");
        }
        assertExactValue_1.assertExactValue(JsonNumberEnum_5.JsonNumberEnum.Name, o.child, false, path + ".child:parent_tests_child_JsonNumberEnum:Name");
        assertExactValue_1.assertExactValue(JsonNumberEnum_4.JsonNumberEnum.Name, o.local, false, path + ".local:parent_tests_JsonNumberEnum:Name");
        assertExactValue_1.assertExactValue(JsonNumberEnum_2.JsonNumberEnum.Name, o.parent, false, path + ".parent:parent_JsonNumberEnum:Name");
        assertExactValue_1.assertExactValue(JsonNumberEnum_1.JsonNumberEnum.Name, o.root, false, path + ".root:JsonNumberEnum:Name");
        assertExactValue_1.assertExactValue(JsonNumberEnum_3.JsonNumberEnum.Name, o.sibling, false, path + ".sibling:parent_sibling_JsonNumberEnum:Name");
    }
}
exports.assertJsonNumberEnumValueMixedTest = assertJsonNumberEnumValueMixedTest;
