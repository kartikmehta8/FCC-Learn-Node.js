"use strict";

const _ = require("lodash");

// Array, What to replace with?, start index, stop index
const test = _.fill([1, 2, 3, 4, 5], "test", 1, 4);

console.log(test);
