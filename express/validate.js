"use strict";

const path = require("path");
const bodyParser = require("body-parser");
const Joi = require("joi");
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

    // Joi is used for validation of data that is being received from the User.
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required(),
    });

    const [data] = req.body;
    const validation = schema.validate(data);
    res.send(validation);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
