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
var JsonNumberEnum_1 = require("../../../__type__/JsonNumberEnum");
var JsonNumberEnum_2 = require("../../../__type__/parent/JsonNumberEnum");
var JsonNumberEnum_3 = require("../../../__type__/parent/sibling/JsonNumberEnum");
var JsonNumberEnum_4 = require("../../../__type__/parent/tests/JsonNumberEnum");
var JsonNumberEnum_5 = require("../../../__type__/parent/tests/child/JsonNumberEnum");
function makeJsonNumberEnumValueMixedTest(props) {
    return __assign(__assign({}, props), { child: JsonNumberEnum_5.JsonNumberEnum.Name, local: JsonNumberEnum_4.JsonNumberEnum.Name, parent: JsonNumberEnum_2.JsonNumberEnum.Name, root: JsonNumberEnum_1.JsonNumberEnum.Name, sibling: JsonNumberEnum_3.JsonNumberEnum.Name });
}
exports.makeJsonNumberEnumValueMixedTest = makeJsonNumberEnumValueMixedTest;
