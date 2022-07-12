"use strict";

const fs = require("fs");
const zlib = require("zlib");

// Used to compress the Files
const gzip = zlib.createGzip();

// To decompress the Files
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream("./test.txt", "utf8");
const writeStream = fs.createWriteStream("./test2.txt.gz");

readStream.pipe(gzip).pipe(writeStream);

const unReadStream = fs.createReadStream("./test2.txt.gz");
const unWriteStream = fs.createWriteStream("./test3.txt");

unReadStream.pipe(gunzip).pipe(unWriteStream);
