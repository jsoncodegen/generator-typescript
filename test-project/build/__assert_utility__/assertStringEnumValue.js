"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("./AssertionError");
function assertStringEnumValue(expected, actual, isNullable, path) {
    if (actual == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected string enum, got null (at " + path + ")");
        }
    }
    else {
        if (typeof actual !== 'string' || !expected.includes(actual)) {
            throw new AssertionError_1.AssertionError("Expected string enum, got " + typeof actual + " (at " + path + ")");
        }
    }
}
exports.assertStringEnumValue = assertStringEnumValue;
