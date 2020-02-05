"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertArray_1 = require("../../../__assert_utility__/assertArray");
var assertMap_1 = require("../../../__assert_utility__/assertMap");
var assertNumber_1 = require("../../../__assert_utility__/assertNumber");
function assertJsonNumberTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonNumberTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonNumberTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonNumberTest, got " + typeof o + " (at " + path + ")");
        }
        assertNumber_1.assertNumber(o.count, false, path + ".count");
        assertNumber_1.assertNumber(o.countWithDescription, false, path + ".countWithDescription");
        assertNumber_1.assertNumber(o.countOrNull, true, path + ".countOrNull");
        assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, o.arrayOfCounts, false, path + ".arrayOfCounts");
        assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, true, path); }, o.arrayOfCountsAndNulls, false, path + ".arrayOfCountsAndNulls");
        assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, o.arrayOfCountsOrNull, true, path + ".arrayOfCountsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, true, path); }, o.arrayOfCountsAndNullsOrNull, true, path + ".arrayOfCountsAndNullsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, o.mapOfCounts, false, path + ".mapOfCounts");
        assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, true, path); }, o.mapOfNullsAndCounts, false, path + ".mapOfNullsAndCounts");
        assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, o.mapOfCountsOrNull, true, path + ".mapOfCountsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, true, path); }, o.mapOfNullsAndCountsOrNull, true, path + ".mapOfNullsAndCountsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, value, false, path); }, o.arrayOfMapsOfCounts, false, path + ".arrayOfMapsOfCounts");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, value, false, path); }, o.arrayOfMapsOfCountsOrNull, true, path + ".arrayOfMapsOfCountsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfCounts, false, path + ".arrayOfNullsAndMapsOfCounts");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, true, path); }, value, false, path); }, o.arrayOfMapsOfNullsAndCounts, false, path + ".arrayOfMapsOfNullsAndCounts");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertNumber_1.assertNumber(value, true, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfNullsAndCountsOrNull, true, path + ".arrayOfNullsAndMapsOfNullsAndCountsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, value, false, path); }, o.mapOfArraysOfCounts, false, path + ".mapOfArraysOfCounts");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, value, false, path); }, o.mapOfArraysOfCountsOrNull, true, path + ".mapOfArraysOfCountsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, false, path); }, value, true, path); }, o.mapOfNullsAndArraysOfCounts, false, path + ".mapOfNullsAndArraysOfCounts");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, true, path); }, value, false, path); }, o.mapOfArraysOfNullsAndCounts, false, path + ".mapOfArraysOfNullsAndCounts");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertNumber_1.assertNumber(value, true, path); }, value, true, path); }, o.mapOfNullsAndArraysOfNullsAndCountsOrNull, true, path + ".mapOfNullsAndArraysOfNullsAndCountsOrNull");
    }
}
exports.assertJsonNumberTest = assertJsonNumberTest;
