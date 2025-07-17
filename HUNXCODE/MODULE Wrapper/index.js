//?Module Wrapper
//*In Node.js,
// *every file (module) is wrapped in a special function
// !called the Module Wrapper Function.
// *This is a core part of how Node's module system works under the hood.

//!Why It Matters
//Encapsulation: Variables inside a module don't leak into the global scope
// Module System: Allows each file to have its own exports, require, etc.
// Performance: Node caches modules after the first load using this system.

//* Parameter |	Description
//---------------------------------------------------------------
// exports	 |  Shortcut for //*module.exports, used to export values
// require   |	Function to //*import other modules
// module	 |  Metadata about the current module (e.g., module.exports)
// __filename |	Full path to the current file
// __dirname  |	Directory name of the current module

// (function (exports, require, module, __filename, __dirname) {
//   console.log("HI I am MOdule wrapper");
// })();

console.log(__filename);
console.log(__dirname);
console.log(module);