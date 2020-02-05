"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../../__assert_utility__/AssertionError");
function assertJsonInterface(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_child_JsonInterface'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_child_JsonInterface, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_child_JsonInterface, got " + typeof o + " (at " + path + ")");
        }
    }
}
exports.assertJsonInterface = assertJsonInterface;
