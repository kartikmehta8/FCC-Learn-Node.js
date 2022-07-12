"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/test", (req, res) => {
    res.send("Hello World from Test");
});

app.get("/test/:name/:age", (req, res) => {
    // Parameters obtained from the URL
    res.send(`Hello ${req.params.name} of Age ${req.params.age}`);
    // Query Parameters - after '?' like /test?name=Kartik&ag=19
    console.log(req.query);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
