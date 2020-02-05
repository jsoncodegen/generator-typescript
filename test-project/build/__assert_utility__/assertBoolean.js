"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("./AssertionError");
function assertBoolean(value, isNullable, path) {
    if (value == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected boolean, got null (at " + path + ")");
        }
    }
    else {
        if (typeof value !== 'boolean') {
            throw new AssertionError_1.AssertionError("Expected boolean, got " + typeof value + " (at " + path + ")");
        }
    }
}
exports.assertBoolean = assertBoolean;
