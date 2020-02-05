"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionError_1 = require("../../../__assert_utility__/AssertionError");
var assertArray_1 = require("../../../__assert_utility__/assertArray");
var assertJsonInterface_1 = require("./child/assertJsonInterface");
var assertMap_1 = require("../../../__assert_utility__/assertMap");
function assertJsonInterfaceChildTest(o, isNullable, path) {
    if (path === void 0) { path = '__type___parent_tests_JsonInterfaceChildTest'; }
    if (o == null) {
        if (!isNullable) {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonInterfaceChildTest, got null (at " + path + ")");
        }
    }
    else {
        if (typeof o !== 'object') {
            throw new AssertionError_1.AssertionError("Expected __type___parent_tests_JsonInterfaceChildTest, got " + typeof o + " (at " + path + ")");
        }
        assertJsonInterface_1.assertJsonInterface(o.object_, false, path + ".object_");
        assertJsonInterface_1.assertJsonInterface(o.objectWithDescription, false, path + ".objectWithDescription");
        assertJsonInterface_1.assertJsonInterface(o.objectOrNull, true, path + ".objectOrNull");
        assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, o.arrayOfObjects, false, path + ".arrayOfObjects");
        assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, true, path); }, o.arrayOfObjectsAndNulls, false, path + ".arrayOfObjectsAndNulls");
        assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, o.arrayOfObjectsOrNull, true, path + ".arrayOfObjectsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, true, path); }, o.arrayOfObjectsAndNullsOrNull, true, path + ".arrayOfObjectsAndNullsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, o.mapOfObjects, false, path + ".mapOfObjects");
        assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, true, path); }, o.mapOfNullsAndObjects, false, path + ".mapOfNullsAndObjects");
        assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, o.mapOfObjectsOrNull, true, path + ".mapOfObjectsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, true, path); }, o.mapOfNullsAndObjectsOrNull, true, path + ".mapOfNullsAndObjectsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, value, false, path); }, o.arrayOfMapsOfObjects, false, path + ".arrayOfMapsOfObjects");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, value, false, path); }, o.arrayOfMapsOfObjectsOrNull, true, path + ".arrayOfMapsOfObjectsOrNull");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfObjects, false, path + ".arrayOfNullsAndMapsOfObjects");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, true, path); }, value, false, path); }, o.arrayOfMapsOfNullsAndObjects, false, path + ".arrayOfMapsOfNullsAndObjects");
        assertArray_1.assertArray(function (value, path) { return assertMap_1.assertMap(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, true, path); }, value, true, path); }, o.arrayOfNullsAndMapsOfNullsAndObjectsOrNull, true, path + ".arrayOfNullsAndMapsOfNullsAndObjectsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, value, false, path); }, o.mapOfArraysOfObjects, false, path + ".mapOfArraysOfObjects");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, value, false, path); }, o.mapOfArraysOfObjectsOrNull, true, path + ".mapOfArraysOfObjectsOrNull");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, false, path); }, value, true, path); }, o.mapOfNullsAndArraysOfObjects, false, path + ".mapOfNullsAndArraysOfObjects");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, true, path); }, value, false, path); }, o.mapOfArraysOfNullsAndObjects, false, path + ".mapOfArraysOfNullsAndObjects");
        assertMap_1.assertMap(function (value, path) { return assertArray_1.assertArray(function (value, path) { return assertJsonInterface_1.assertJsonInterface(value, true, path); }, value, true, path); }, o.mapOfNullsAndArraysOfNullsAndObjectsOrNull, true, path + ".mapOfNullsAndArraysOfNullsAndObjectsOrNull");
    }
}
exports.assertJsonInterfaceChildTest = assertJsonInterfaceChildTest;
