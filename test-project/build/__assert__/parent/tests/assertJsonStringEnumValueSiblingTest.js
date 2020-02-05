"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var JsonStringEnum_1 = require("../../../__type__/parent/sibling/JsonStringEnum");
var assertArray_1 = require("../../../__assert_utility__/assertArray");
var assertExactValue_1 = require("../../../__assert_utility__/assertExactValue");
var assertMap_1 = require("../../../__assert_utility__/assertMap");
function assertJsonStringEnumValueSiblingTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonStringEnumValueSiblingTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringEnumValueSiblingTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringEnumValueSiblingTest, got " + typeof o + " (at " + path + ")");
        }
        assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, o.enumValue, false, path + ".enumValue:parent_sibling_JsonStringEnum:Name");
        assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, o.enumValueWithDescription, false, path + ".enumValueWithDescription:parent_sibling_JsonStringEnum:Name");
        assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, o.enumValueOrNull, true, path + ".enumValueOrNull:parent_sibling_JsonStringEnum:Name");
        assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, o.arrayOfEnumValues, false, path + ".arrayOfEnumValues");
        assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, true, path); }, o.arrayOfEnumValuesAndNulls, false, path + ".arrayOfEnumValuesAndNulls");
        assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, o.arrayOfEnumValuesOrNull, true, path + ".arrayOfEnumValuesOrNull");
        assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, true, path); }, o.arrayOfEnumValuesAndNullsOrNull, true, path + ".arrayOfEnumValuesAndNullsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, o.mapOfEnumValues, false, path + ".mapOfEnumValues");
        assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, true, path); }, o.mapOfNullsAndEnumValues, false, path + ".mapOfNullsAndEnumValues");
        assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, o.mapOfEnumValuesOrNull, true, path + ".mapOfEnumValuesOrNull");
        assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, true, path); }, o.mapOfNullsAndEnumValuesOrNull, true, path + ".mapOfNullsAndEnumValuesOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, value, false, path); }, o.arrayOfMapsOfEnumValues, false, path + ".arrayOfMapsOfEnumValues");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, value, false, path); }, o.arrayOfMapsOfEnumValuesOrNull, true, path + ".arrayOfMapsOfEnumValuesOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfEnumValues, false, path + ".arrayOfNullsAndMapsOfEnumValues");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, true, path); }, value, false, path); }, o.arrayOfMapsOfNullsAndEnumValues, false, path + ".arrayOfMapsOfNullsAndEnumValues");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, true, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfNullsAndEnumValuesOrNull, true, path + ".arrayOfNullsAndMapsOfNullsAndEnumValuesOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, value, false, path); }, o.mapOfArraysOfEnumValues, false, path + ".mapOfArraysOfEnumValues");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, value, false, path); }, o.mapOfArraysOfEnumValuesOrNull, true, path + ".mapOfArraysOfEnumValuesOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, false, path); }, value, true, path); }, o.mapOfNullsAndArraysOfEnumValues, false, path + ".mapOfNullsAndArraysOfEnumValues");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, true, path); }, value, false, path); }, o.mapOfArraysOfNullsAndEnumValues, false, path + ".mapOfArraysOfNullsAndEnumValues");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertExactValue_1.assertExactValue(JsonStringEnum_1.JsonStringEnum.Name, value, true, path); }, value, true, path); }, o.mapOfNullsAndArraysOfNullsAndEnumValuesOrNull, true, path + ".mapOfNullsAndArraysOfNullsAndEnumValuesOrNull");
    }
}
exports.assertJsonStringEnumValueSiblingTest = assertJsonStringEnumValueSiblingTest;
