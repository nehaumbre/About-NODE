// var generateName = require('sillyname');
import {randomSuperhero} from "superheroes";
import generateName from "sillyName";
var sillyName = generateName();
var superhero = randomSuperhero();

console.log(`My silly name is ${sillyName}`);
console.log("Iam", superhero);
