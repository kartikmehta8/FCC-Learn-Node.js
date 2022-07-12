"use strict";

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // For serving HTML files
    // const readStream = fs.createReadStream("./static/index.html");
    // res.writeHead(200, { "Content-type": "text/html" });

    // For serving JSON files
    // const readStream = fs.createReadStream("./static/test.json");
    // res.writeHead(200, { "Content-type": "application/json" });

    // For serving IMAGE files
    // const readStream = fs.createReadStream("./static/test.jpg");
    // res.writeHead(200, { "Content-type": "image/jpg" });

    readStream.pipe(res);
});

server.listen(3000, () => {
    console.log("Listening on port 3000");
});
