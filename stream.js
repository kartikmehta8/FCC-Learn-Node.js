"use strict";

const fs = require("fs");

const readStream = fs.createReadStream("./test.txt", "utf8");
const writeStream = fs.createWriteStream("./test2.txt");

// Event Listener, Encoding Type and Callback
readStream.on("data", (chunk) => {
    writeStream.write(chunk);
});
