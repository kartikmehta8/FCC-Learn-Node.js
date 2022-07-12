"use strict";

const path = require("path");
const express = require("express");
const app = express();

const searchResults = ["John Wick", "URI", "Snowden", "Unfriended Dark Web"];

// Alias Name - /public & path to static folder
app.use("/public", express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");

app.get("/:userQuery", (req, res) => {
    res.render("index", {
        data: {
            userQuery: req.params.userQuery,
            searchResults: searchResults,
            loggedIn: true,
            userName: "Kartik",
        },
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
