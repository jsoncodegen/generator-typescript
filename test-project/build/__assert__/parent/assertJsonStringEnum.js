"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonStringEnum_1 = require("../../__type__/parent/JsonStringEnum");
var assertStringEnumValue_1 = require("../../__assert_utility__/assertStringEnumValue");
var __VALUES__ = [
    JsonStringEnum_1.JsonStringEnum.Name,
    JsonStringEnum_1.JsonStringEnum.NameWithDescription,
    JsonStringEnum_1.JsonStringEnum.NameOfEmptyValue
];
function assertJsonStringEnum(o, isNullable, path) {
    if (path === void 0) { path = 'parent_JsonStringEnum'; }
    assertStringEnumValue_1.assertStringEnumValue(__VALUES__, o, isNullable, path);
}
exports.assertJsonStringEnum = assertJsonStringEnum;
