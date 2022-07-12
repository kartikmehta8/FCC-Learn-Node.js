"use strict";

const path = require("path");
const express = require("express");
const app = express();

// Alias Name - /public & path to static folder
app.use("/public", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
