import greet from "./greet.js";  // should specify the .js extension 
import {p1,p2,p3} from "./people.js"
greet("GINNY");
// !console.log(__filename);
// __filename is not defined in ES module scope //* wont work cause this is ES6 code 
//!Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.C
//* Solution : change all files to .mjs extension : This use is not advisable

greet(p1);
greet(p2);
greet(p3);