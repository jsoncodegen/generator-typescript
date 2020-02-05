"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("./AssertionError");
function assertMap(assertItem, map, isNullable, path) {
    if (map == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected map, got null (at " + path + ")");
        }
    }
    else {
        if (typeof map !== 'object') {
            throw new AssertionError_1.AssertionError("Expected map, got " + typeof map + " (at " + path + ")");
        }
        for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
            var key = _a[_i];
            assertItem(map[key], path + ("." + key));
        }
    }
}
exports.assertMap = assertMap;
