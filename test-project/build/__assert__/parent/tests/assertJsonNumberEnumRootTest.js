"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertArray_1 = require("../../../__assert_utility__/assertArray");
var assertJsonNumberEnum_1 = require("../../assertJsonNumberEnum");
var assertMap_1 = require("../../../__assert_utility__/assertMap");
function assertJsonNumberEnumRootTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonNumberEnumRootTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonNumberEnumRootTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonNumberEnumRootTest, got " + typeof o + " (at " + path + ")");
        }
        assertJsonNumberEnum_1.assertJsonNumberEnum(o.enum_, false, path + ".enum_:JsonNumberEnum");
        assertJsonNumberEnum_1.assertJsonNumberEnum(o.enumWithDescription, false, path + ".enumWithDescription:JsonNumberEnum");
        assertJsonNumberEnum_1.assertJsonNumberEnum(o.enumOrNull, true, path + ".enumOrNull:JsonNumberEnum");
        assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, o.arrayOfEnums, false, path + ".arrayOfEnums");
        assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, true, path); }, o.arrayOfEnumsAndNulls, false, path + ".arrayOfEnumsAndNulls");
        assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, o.arrayOfEnumsOrNull, true, path + ".arrayOfEnumsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, true, path); }, o.arrayOfEnumsAndNullsOrNull, true, path + ".arrayOfEnumsAndNullsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, o.mapOfEnums, false, path + ".mapOfEnums");
        assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, true, path); }, o.mapOfNullsAndEnums, false, path + ".mapOfNullsAndEnums");
        assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, o.mapOfEnumsOrNull, true, path + ".mapOfEnumsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, true, path); }, o.mapOfNullsAndEnumsOrNull, true, path + ".mapOfNullsAndEnumsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, value, false, path); }, o.arrayOfMapsOfEnums, false, path + ".arrayOfMapsOfEnums");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, value, false, path); }, o.arrayOfMapsOfEnumsOrNull, true, path + ".arrayOfMapsOfEnumsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfEnums, false, path + ".arrayOfNullsAndMapsOfEnums");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, true, path); }, value, false, path); }, o.arrayOfMapsOfNullsAndEnums, false, path + ".arrayOfMapsOfNullsAndEnums");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, true, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfNullsAndEnumsOrNull, true, path + ".arrayOfNullsAndMapsOfNullsAndEnumsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, value, false, path); }, o.mapOfArraysOfEnums, false, path + ".mapOfArraysOfEnums");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, value, false, path); }, o.mapOfArraysOfEnumsOrNull, true, path + ".mapOfArraysOfEnumsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, false, path); }, value, true, path); }, o.mapOfNullsAndArraysOfEnums, false, path + ".mapOfNullsAndArraysOfEnums");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, true, path); }, value, false, path); }, o.mapOfArraysOfNullsAndEnums, false, path + ".mapOfArraysOfNullsAndEnums");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonNumberEnum_1.assertJsonNumberEnum(value, true, path); }, value, true, path); }, o.mapOfNullsAndArraysOfNullsAndEnumsOrNull, true, path + ".mapOfNullsAndArraysOfNullsAndEnumsOrNull");
    }
}
exports.assertJsonNumberEnumRootTest = assertJsonNumberEnumRootTest;
