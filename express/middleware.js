"use strict";

const express = require("express");
const app = express();

app.set("view engine", "ejs");

// Custom middleware, next is invoked to tell that processing has been finished otherwise it will give server timeout.
// Giving route is optional, if not given, middleware will be invoked at every route else for that route will be invoked.
app.use("/", (req, res, next) => {
    // We can alter the req parameter
    req.name = "JSON";
    console.log(req.url, req.method);
    next();
});

app.get("/", (req, res) => {
    // Printing the added (name) parameter
    console.log(req.name);

    res.json({ success: true });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
