//A module in Node.js is simply a file.
// Each file is treated as a separate module.
//modules are the building blocks of your application.
// They help you organize your code into reusable pieces.
// Node's module system is based on CommonJS,
// though it also supports ES Modules (ESM).

// below code allows us to use greet function fron greet.js
const greet = require("./greet");
const { person1, person2, person3 } = require("./peoples");
greet();
greet("POPeye");

greet(person1);
greet(person2);
greet(person3)