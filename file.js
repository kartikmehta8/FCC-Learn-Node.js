"use strict";

const fs = require("fs");

// Name of the File, What to write in File, Callback with Error
fs.writeFile("example.py", "print('Hello World!')", (error) => {
    console.log(error ? error : "FILE CREATED");

    if (!error) {
        // Name of the File, Encoding Type, Callback with Error and File
        fs.readFile("example.py", "utf8", (err, file) => {
            console.log(err ? err : file);
        });

        // File you want to Rename, New Name, Callback with Error
        fs.rename("example.py", "python.py", (err) => {
            console.log(err ? err : "RENAMED THE FILE");
        });

        // Name of the File, Data to Append, Callback with Error
        fs.appendFile("python.py", "\nprint('Kartik Mehta')", (err) => {
            console.log(err ? err : "APPENDED THE DATA");
        });

        // Name of the File, Callback with Error
        fs.unlink("python.py", (err) => {
            console.log(err ? err : "FILE DELETED");
        });
    }
});
