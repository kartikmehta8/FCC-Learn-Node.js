"use strict";

const people = require("./routes/people");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

// Root URL - / & people
app.use("/", people);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
