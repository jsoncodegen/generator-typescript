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
var JsonNumberEnum_1 = require("../../../__type__/parent/JsonNumberEnum");
function makeJsonNumberEnumValueParentTest(props) {
    return __assign(__assign({}, props), { enumValue: JsonNumberEnum_1.JsonNumberEnum.Name, enumValueWithDescription: JsonNumberEnum_1.JsonNumberEnum.Name });
}
exports.makeJsonNumberEnumValueParentTest = makeJsonNumberEnumValueParentTest;
