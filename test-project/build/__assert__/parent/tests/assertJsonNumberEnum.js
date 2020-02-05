"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonNumberEnum_1 = require("../../../__type__/parent/tests/JsonNumberEnum");
var assertNumberEnumValue_1 = require("../../../__assert_utility__/assertNumberEnumValue");
var __VALUES__ = [
    JsonNumberEnum_1.JsonNumberEnum.Name,
    JsonNumberEnum_1.JsonNumberEnum.NameWithDescription,
    JsonNumberEnum_1.JsonNumberEnum.NameOfFractionValue
];
function assertJsonNumberEnum(o, isNullable, path) {
    if (path === void 0) { path = 'parent_tests_JsonNumberEnum'; }
    assertNumberEnumValue_1.assertNumberEnumValue(__VALUES__, o, isNullable, path);
}
exports.assertJsonNumberEnum = assertJsonNumberEnum;
