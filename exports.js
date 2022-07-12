"use strict";

const sum = (variable1, variable2) => variable1 + variable2;
const diff = (variable1, variable2) => variable1 - variable2;
const mul = (variable1, variable2) => variable1 * variable2;
const div = (variable1, variable2) => variable1 / variable2;

// Without exporting, we cannot access the sum() function in another files.
module.exports = {
    sum,
    diff,
    mul,
    div,
};
