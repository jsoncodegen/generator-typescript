"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("./AssertionError");
function assertNumberEnumValue(expected, actual, isNullable, path) {
    if (actual == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected number enum, got null (at " + path + ")");
        }
    }
    else {
        if (typeof actual !== 'number' || !expected.includes(actual)) {
            throw new AssertionError_1.AssertionError("Expected number enum, got " + typeof actual + " (at " + path + ")");
        }
    }
}
exports.assertNumberEnumValue = assertNumberEnumValue;
