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
var JsonStringEnum_1 = require("../../../__type__/JsonStringEnum");
var JsonStringEnum_2 = require("../../../__type__/parent/JsonStringEnum");
var JsonStringEnum_3 = require("../../../__type__/parent/sibling/JsonStringEnum");
var JsonStringEnum_4 = require("../../../__type__/parent/tests/JsonStringEnum");
var JsonStringEnum_5 = require("../../../__type__/parent/tests/child/JsonStringEnum");
function makeJsonStringEnumValueMixedTest(props) {
    return __assign(__assign({}, props), { child: JsonStringEnum_5.JsonStringEnum.Name, local: JsonStringEnum_4.JsonStringEnum.Name, parent: JsonStringEnum_2.JsonStringEnum.Name, root: JsonStringEnum_1.JsonStringEnum.Name, sibling: JsonStringEnum_3.JsonStringEnum.Name });
}
exports.makeJsonStringEnumValueMixedTest = makeJsonStringEnumValueMixedTest;
