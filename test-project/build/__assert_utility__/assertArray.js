"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("./AssertionError");
function assertArray(assertItem, array, isNullable, path) {
    if (array == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected array, got null (at " + path + ")");
        }
    }
    else {
        if (!Array.isArray(array)) {
            throw new AssertionError_1.AssertionError("Expected array, got " + typeof array + " (at " + path + ")");
        }
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            assertItem(item, path + ("[" + i + "]"));
        }
    }
}
exports.assertArray = assertArray;
