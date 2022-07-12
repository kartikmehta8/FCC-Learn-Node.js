"use strict";

const fs = require("fs");

// Name of the Folder, Callback
fs.mkdir("test", (err) => {
    console.log(err ? err : "FOLDER CREATED");

    if (!err) {
        fs.writeFile("./test/python.py", "print('Hello World!')\n", (err) =>
            console.log(err ? err : "FILE 1 CREATED")
        );
        fs.writeFile("./test/c++.cpp", "cout << 'Hello World';\n", (err) =>
            console.log(err ? err : "FILE 2 CREATED")
        );
    }
});

// Read the files from a folder and return them as Array.
fs.readdir("test", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        for (const file of files) {
            fs.unlink("./test/" + file, (err) => {
                console.log(err ? err : "FILE DELETED : " + file);
            });
        }
    }
});

// Name of the Folder, Callback
fs.rmdir("test", (err) => {
    console.log(err ? err : "FOLDER DELETED");
});
