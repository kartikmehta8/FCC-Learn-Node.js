"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World!");
        res.end();
    } else {
        let name = req.url.slice(1, req.url.length);
        res.write(`Hello ${name}`);
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Listening on Port 3000");
});
