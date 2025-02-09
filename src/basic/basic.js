"use strict";
const message = "Hello!";
// Accessing the property 'toLowerCase'
// on 'message' and the calling it
message.toLowerCase();
// Calling 'message'
// message();
const announcement = "Hello World!";
// How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();
// We probably meant to write this...
announcement.toLocaleLowerCase();
const value = Math.random() < 0.5 ? "a" : "b"; // 삼항연산자 true : false
if (value !== "a") {
    // ...
}
else if (value === "a") {
    // Oops, unreachable
}
function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}
// 1. 추론적 타입 지정
let x = 3;
// x = [0, 1, null];
class Animal {
}
class Rhino extends Animal {
    constructor() {
        super(...arguments);
        this.hasHorn = true;
    }
}
class Elephant extends Animal {
    constructor() {
        super(...arguments);
        this.hasTrunk = true;
    }
}
class Snake extends Animal {
    constructor() {
        super(...arguments);
        this.hasLegs = false;
    }
}
let zoo = [new Rhino(), new Elephant(), new Snake()];
// Animal[] 추론 추측, 그러나 다른 타입이 지정됨.
// 2.명시적 타입 지정(Explict Types)
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
}
greet("Brendan", new Date());
