"use strict";

const express = require("express");
const route = express.Router();

route.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

route.get("/", (req, res) => {
    res.send("You are at / ROOT Route.");
});

route.get("/test", (req, res) => {
    res.send("You are at /test TEST Route.");
});

module.exports = route;
