"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertJsonNumberEnum_1 = require("../../assertJsonNumberEnum");
var assertJsonNumberEnum_2 = require("../assertJsonNumberEnum");
var assertJsonNumberEnum_3 = require("../sibling/assertJsonNumberEnum");
var assertJsonNumberEnum_4 = require("./assertJsonNumberEnum");
var assertJsonNumberEnum_5 = require("./child/assertJsonNumberEnum");
function assertJsonNumberEnumMixedTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonNumberEnumMixedTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonNumberEnumMixedTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonNumberEnumMixedTest, got " + typeof o + " (at " + path + ")");
        }
        assertJsonNumberEnum_5.assertJsonNumberEnum(o.child, false, path + ".child:parent_tests_child_JsonNumberEnum");
        assertJsonNumberEnum_4.assertJsonNumberEnum(o.local, false, path + ".local:parent_tests_JsonNumberEnum");
        assertJsonNumberEnum_2.assertJsonNumberEnum(o.parent, false, path + ".parent:parent_JsonNumberEnum");
        assertJsonNumberEnum_1.assertJsonNumberEnum(o.root, false, path + ".root:JsonNumberEnum");
        assertJsonNumberEnum_3.assertJsonNumberEnum(o.sibling, false, path + ".sibling:parent_sibling_JsonNumberEnum");
    }
}
exports.assertJsonNumberEnumMixedTest = assertJsonNumberEnumMixedTest;
