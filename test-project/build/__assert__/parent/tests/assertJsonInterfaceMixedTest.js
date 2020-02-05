"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertJsonInterface_1 = require("../../assertJsonInterface");
var assertJsonInterface_2 = require("../assertJsonInterface");
var assertJsonInterface_3 = require("../sibling/assertJsonInterface");
var assertJsonInterface_4 = require("./assertJsonInterface");
var assertJsonInterface_5 = require("./child/assertJsonInterface");
function assertJsonInterfaceMixedTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonInterfaceMixedTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonInterfaceMixedTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonInterfaceMixedTest, got " + typeof o + " (at " + path + ")");
        }
        assertJsonInterface_5.assertJsonInterface(o.child, false, path + ".child");
        assertJsonInterface_4.assertJsonInterface(o.local, false, path + ".local");
        assertJsonInterface_2.assertJsonInterface(o.parent, false, path + ".parent");
        assertJsonInterface_1.assertJsonInterface(o.root, false, path + ".root");
        assertJsonInterface_3.assertJsonInterface(o.sibling, false, path + ".sibling");
    }
}
exports.assertJsonInterfaceMixedTest = assertJsonInterfaceMixedTest;
