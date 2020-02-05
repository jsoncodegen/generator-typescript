"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var JsonStringEnum_1 = require("../../../__type__/JsonStringEnum");
var JsonStringEnum_2 = require("../../../__type__/parent/JsonStringEnum");
var JsonStringEnum_3 = require("../../../__type__/parent/sibling/JsonStringEnum");
var JsonStringEnum_4 = require("../../../__type__/parent/tests/JsonStringEnum");
var JsonStringEnum_5 = require("../../../__type__/parent/tests/child/JsonStringEnum");
var assertExactValue_1 = require("../../../__assert_utility__/assertExactValue");
function assertJsonStringEnumValueMixedTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonStringEnumValueMixedTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringEnumValueMixedTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringEnumValueMixedTest, got " + typeof o + " (at " + path + ")");
        }
        assertExactValue_1.assertExactValue(JsonStringEnum_5.JsonStringEnum.Name, o.child, false, path + ".child:parent_tests_child_JsonStringEnum:Name");
        assertExactValue_1.assertExactValue(JsonStringEnum_4.JsonStringEnum.Name, o.local, false, path + ".local:parent_tests_JsonStringEnum:Name");
        assertExactValue_1.assertExactValue(JsonStringEnum_2.JsonStringEnum.Name, o.parent, false, path + ".parent:parent_JsonStringEnum:Name");
        assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, o.root, false, path + ".root:JsonStringEnum:Name");
        assertExactValue_1.assertExactValue(JsonStringEnum_3.JsonStringEnum.Name, o.sibling, false, path + ".sibling:parent_sibling_JsonStringEnum:Name");
    }
}
exports.assertJsonStringEnumValueMixedTest = assertJsonStringEnumValueMixedTest;
