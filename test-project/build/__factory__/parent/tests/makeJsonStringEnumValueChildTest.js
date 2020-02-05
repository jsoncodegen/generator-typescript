"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsonStringEnum_1 = require("../../../__type__/parent/tests/child/JsonStringEnum");
function makeJsonStringEnumValueChildTest(props) {
    return __assign(__assign({}, props), { enumValue: JsonStringEnum_1.JsonStringEnum.Name, enumValueWithDescription: JsonStringEnum_1.JsonStringEnum.Name });
}
exports.makeJsonStringEnumValueChildTest = makeJsonStringEnumValueChildTest;
