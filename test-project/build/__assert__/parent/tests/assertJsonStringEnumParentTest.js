"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertArray_1 = require("../../../__assert_utility__/assertArray");
var assertJsonStringEnum_1 = require("../assertJsonStringEnum");
var assertMap_1 = require("../../../__assert_utility__/assertMap");
function assertJsonStringEnumParentTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonStringEnumParentTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringEnumParentTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringEnumParentTest, got " + typeof o + " (at " + path + ")");
        }
        assertJsonStringEnum_1.assertJsonStringEnum(o.enum_, false, path + ".enum_:parent_JsonStringEnum");
        assertJsonStringEnum_1.assertJsonStringEnum(o.enumWithDescription, false, path + ".enumWithDescription:parent_JsonStringEnum");
        assertJsonStringEnum_1.assertJsonStringEnum(o.enumOrNull, true, path + ".enumOrNull:parent_JsonStringEnum");
        assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, o.arrayOfEnums, false, path + ".arrayOfEnums");
        assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, true, path); }, o.arrayOfEnumsAndNulls, false, path + ".arrayOfEnumsAndNulls");
        assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, o.arrayOfEnumsOrNull, true, path + ".arrayOfEnumsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, true, path); }, o.arrayOfEnumsAndNullsOrNull, true, path + ".arrayOfEnumsAndNullsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, o.mapOfEnums, false, path + ".mapOfEnums");
        assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, true, path); }, o.mapOfNullsAndEnums, false, path + ".mapOfNullsAndEnums");
        assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, o.mapOfEnumsOrNull, true, path + ".mapOfEnumsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, true, path); }, o.mapOfNullsAndEnumsOrNull, true, path + ".mapOfNullsAndEnumsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, value, false, path); }, o.arrayOfMapsOfEnums, false, path + ".arrayOfMapsOfEnums");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, value, false, path); }, o.arrayOfMapsOfEnumsOrNull, true, path + ".arrayOfMapsOfEnumsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfEnums, false, path + ".arrayOfNullsAndMapsOfEnums");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, true, path); }, value, false, path); }, o.arrayOfMapsOfNullsAndEnums, false, path + ".arrayOfMapsOfNullsAndEnums");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, true, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfNullsAndEnumsOrNull, true, path + ".arrayOfNullsAndMapsOfNullsAndEnumsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, value, false, path); }, o.mapOfArraysOfEnums, false, path + ".mapOfArraysOfEnums");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, value, false, path); }, o.mapOfArraysOfEnumsOrNull, true, path + ".mapOfArraysOfEnumsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, false, path); }, value, true, path); }, o.mapOfNullsAndArraysOfEnums, false, path + ".mapOfNullsAndArraysOfEnums");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, true, path); }, value, false, path); }, o.mapOfArraysOfNullsAndEnums, false, path + ".mapOfArraysOfNullsAndEnums");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonStringEnum_1.assertJsonStringEnum(value, true, path); }, value, true, path); }, o.mapOfNullsAndArraysOfNullsAndEnumsOrNull, true, path + ".mapOfNullsAndArraysOfNullsAndEnumsOrNull");
    }
}
exports.assertJsonStringEnumParentTest = assertJsonStringEnumParentTest;
