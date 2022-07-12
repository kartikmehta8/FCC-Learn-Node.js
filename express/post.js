"use strict";

const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// Alias Name - /public & path to static folder
app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));

// For JSON Data
app.use(bodyParser.json());

app.get("/", (req, res) => {
    // Change the file to whatever you want express to serve.
    res.sendFile(path.join(__dirname, "static", "json.html"));
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
