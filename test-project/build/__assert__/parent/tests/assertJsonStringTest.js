"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertArray_1 = require("../../../__assert_utility__/assertArray");
var assertMap_1 = require("../../../__assert_utility__/assertMap");
var assertString_1 = require("../../../__assert_utility__/assertString");
function assertJsonStringTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonStringTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonStringTest, got " + typeof o + " (at " + path + ")");
        }
        assertString_1.assertString(o.name, false, path + ".name");
        assertString_1.assertString(o.nameWithDescription, false, path + ".nameWithDescription");
        assertString_1.assertString(o.nameOrNull, true, path + ".nameOrNull");
        assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, false, path); }, o.arrayOfNames, false, path + ".arrayOfNames");
        assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, true, path); }, o.arrayOfNamesAndNulls, false, path + ".arrayOfNamesAndNulls");
        assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, false, path); }, o.arrayOfNamesOrNull, true, path + ".arrayOfNamesOrNull");
        assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, true, path); }, o.arrayOfNamesAndNullsOrNull, true, path + ".arrayOfNamesAndNullsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, false, path); }, o.mapOfNames, false, path + ".mapOfNames");
        assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, true, path); }, o.mapOfNullsAndNames, false, path + ".mapOfNullsAndNames");
        assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, false, path); }, o.mapOfNamesOrNull, true, path + ".mapOfNamesOrNull");
        assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, true, path); }, o.mapOfNullsAndNamesOrNull, true, path + ".mapOfNullsAndNamesOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, false, path); }, value, false, path); }, o.arrayOfMapsOfNames, false, path + ".arrayOfMapsOfNames");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, false, path); }, value, false, path); }, o.arrayOfMapsOfNamesOrNull, true, path + ".arrayOfMapsOfNamesOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, false, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfNames, false, path + ".arrayOfNullsAndMapsOfNames");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, true, path); }, value, false, path); }, o.arrayOfMapsOfNullsAndNames, false, path + ".arrayOfMapsOfNullsAndNames");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertString_1.assertString(value, true, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfNullsAndNamesOrNull, true, path + ".arrayOfNullsAndMapsOfNullsAndNamesOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, false, path); }, value, false, path); }, o.mapOfArraysOfNames, false, path + ".mapOfArraysOfNames");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, false, path); }, value, false, path); }, o.mapOfArraysOfNamesOrNull, true, path + ".mapOfArraysOfNamesOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, false, path); }, value, true, path); }, o.mapOfNullsAndArraysOfNames, false, path + ".mapOfNullsAndArraysOfNames");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, true, path); }, value, false, path); }, o.mapOfArraysOfNullsAndNames, false, path + ".mapOfArraysOfNullsAndNames");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertString_1.assertString(value, true, path); }, value, true, path); }, o.mapOfNullsAndArraysOfNullsAndNamesOrNull, true, path + ".mapOfNullsAndArraysOfNullsAndNamesOrNull");
    }
}
exports.assertJsonStringTest = assertJsonStringTest;
