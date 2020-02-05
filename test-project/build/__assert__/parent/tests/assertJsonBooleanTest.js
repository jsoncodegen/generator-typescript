"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertArray_1 = require("../../../__assert_utility__/assertArray");
var assertBoolean_1 = require("../../../__assert_utility__/assertBoolean");
var assertMap_1 = require("../../../__assert_utility__/assertMap");
function assertJsonBooleanTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonBooleanTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonBooleanTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonBooleanTest, got " + typeof o + " (at " + path + ")");
        }
        assertBoolean_1.assertBoolean(o.flag, false, path + ".flag");
        assertBoolean_1.assertBoolean(o.flagWithDescription, false, path + ".flagWithDescription");
        assertBoolean_1.assertBoolean(o.flagOrNull, true, path + ".flagOrNull");
        assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, o.arrayOfFlags, false, path + ".arrayOfFlags");
        assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, true, path); }, o.arrayOfFlagsAndNulls, false, path + ".arrayOfFlagsAndNulls");
        assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, o.arrayOfFlagsOrNull, true, path + ".arrayOfFlagsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, true, path); }, o.arrayOfFlagsAndNullsOrNull, true, path + ".arrayOfFlagsAndNullsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, o.mapOfFlags, false, path + ".mapOfFlags");
        assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, true, path); }, o.mapOfNullsAndFlags, false, path + ".mapOfNullsAndFlags");
        assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, o.mapOfFlagsOrNull, true, path + ".mapOfFlagsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, true, path); }, o.mapOfNullsAndFlagsOrNull, true, path + ".mapOfNullsAndFlagsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, value, false, path); }, o.arrayOfMapsOfFlags, false, path + ".arrayOfMapsOfFlags");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, value, false, path); }, o.arrayOfMapsOfFlagsOrNull, true, path + ".arrayOfMapsOfFlagsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfFlags, false, path + ".arrayOfNullsAndMapsOfFlags");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, true, path); }, value, false, path); }, o.arrayOfMapsOfNullsAndFlags, false, path + ".arrayOfMapsOfNullsAndFlags");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertBoolean_1.assertBoolean(value, true, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfNullsAndFlagsOrNull, true, path + ".arrayOfNullsAndMapsOfNullsAndFlagsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, value, false, path); }, o.mapOfArraysOfFlags, false, path + ".mapOfArraysOfFlags");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, value, false, path); }, o.mapOfArraysOfFlagsOrNull, true, path + ".mapOfArraysOfFlagsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, false, path); }, value, true, path); }, o.mapOfNullsAndArraysOfFlags, false, path + ".mapOfNullsAndArraysOfFlags");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, true, path); }, value, false, path); }, o.mapOfArraysOfNullsAndFlags, false, path + ".mapOfArraysOfNullsAndFlags");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertBoolean_1.assertBoolean(value, true, path); }, value, true, path); }, o.mapOfNullsAndArraysOfNullsAndFlagsOrNull, true, path + ".mapOfNullsAndArraysOfNullsAndFlagsOrNull");
    }
}
exports.assertJsonBooleanTest = assertJsonBooleanTest;
