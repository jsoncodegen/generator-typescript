"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertJsonStringEnum_1 = require("../../assertJsonStringEnum");
var assertJsonStringEnum_2 = require("../assertJsonStringEnum");
var assertJsonStringEnum_3 = require("../sibling/assertJsonStringEnum");
var assertJsonStringEnum_4 = require("./assertJsonStringEnum");
var assertJsonStringEnum_5 = require("./child/assertJsonStringEnum");
function assertJsonStringEnumMixedTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonStringEnumMixedTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringEnumMixedTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringEnumMixedTest, got " + typeof o + " (at " + path + ")");
        }
        assertJsonStringEnum_5.assertJsonStringEnum(o.child, false, path + ".child:parent_tests_child_JsonStringEnum");
        assertJsonStringEnum_4.assertJsonStringEnum(o.local, false, path + ".local:parent_tests_JsonStringEnum");
        assertJsonStringEnum_2.assertJsonStringEnum(o.parent, false, path + ".parent:parent_JsonStringEnum");
        assertJsonStringEnum_1.assertJsonStringEnum(o.root, false, path + ".root:JsonStringEnum");
        assertJsonStringEnum_3.assertJsonStringEnum(o.sibling, false, path + ".sibling:parent_sibling_JsonStringEnum");
    }
}
exports.assertJsonStringEnumMixedTest = assertJsonStringEnumMixedTest;
