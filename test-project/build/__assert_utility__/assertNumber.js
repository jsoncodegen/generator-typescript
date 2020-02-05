"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("./AssertionError");
function assertNumber(value, isNullable, path) {
    if (value == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected number, got null (at " + path + ")");
        }
    }
    else {
        if (typeof value !== 'number') {
            throw new AssertionError_1.AssertionError("Expected number, got " + typeof value + " (at " + path + ")");
        }
        if (isNaN(value)) {
            throw new AssertionError_1.AssertionError("Expected number, got NaN (at " + path + ")");
        }
        if (!isFinite(value)) {
            throw new AssertionError_1.AssertionError("Expected number, got " + value + " (at " + path + ")");
        }
    }
}
exports.assertNumber = assertNumber;
