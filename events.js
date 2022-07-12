"use strict";

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Events trigger when something changes.
eventEmitter.on("start", () => {
    console.log("Event has started!");
});

eventEmitter.emit("start");

eventEmitter.on("sum", (number1, number2) => {
    console.log("Sum : " + (number1 + number2));
});

eventEmitter.emit("sum", 21, 69);

class Person extends EventEmitter {
    constructor(name) {
        super();

        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let kartik = new Person("Kartik");
let mehta = new Person("Mehta");

/* Making two listeners listen on same variable but of different instance will not execute both until both of them are called separately! */
kartik.on("kartik", () => {
    console.log("My Name is " + kartik.name);
});

mehta.on("kartik", () => {
    console.log("My Name is " + mehta.name);
});

kartik.emit("kartik");
mehta.emit("kartik");
