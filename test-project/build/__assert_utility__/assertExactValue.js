"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("./AssertionError");
function assertExactValue(expected, actual, isNullable, path) {
    if (actual == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected " + expected + ", got null (at " + path + ")");
        }
    }
    else {
        if (actual !== expected) {
            throw new AssertionError_1.AssertionError("Expected " + expected + ", got " + actual + " (at " + path + ")");
        }
    }
}
exports.assertExactValue = assertExactValue;
