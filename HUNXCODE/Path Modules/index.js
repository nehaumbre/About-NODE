import path from "path";

// console.log(path.basename("/foo/bar/baz.txt")); //*Gives this output : baz.txt
// console.log(path.basename("/foo/bar/baz.txt", ".txt")); //*Gives this output : baz
// console.log(path.dirname("/foo/bar/baz.txt")); //* Gives this output : /foo/bar
// console.log(path.extname("/foo/bar/baz.txt")); //* Gives this output : .txt
// console.log(path.join("/foo/bar/", "foofoo", "baz.txt")); // * Gives this output : \foo\bar\foofoo\baz.txt

// //* Going up a level in dir
// console.log(path.join("/goo/foo/bar", "..")); //  * Gives this output : * \goo\foo  that is it skips /bar directory

console.log(path.normalize("/users/test/../folder//file.txt")); // *Gives this output : \users\folder\file.txt
//✅ Normalized means: “what path actually gets used by the file system”.
//* /users/
//*     └── test/
//*           └── ..   ← go back to /users/
//*                 └── folder/
//*                       └── file.txt

console.log(path.parse("/users/test/../folder//file.txt"));
// output below
// {
//   root: '/',
//   dir: '/users/test/../folder/',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }'
console.log(path.parse("/users/test/../folder//file.txt").base);
console.log(path.parse("/users/test/../folder//file.txt").ext);
console.log(path.parse("/users/test/../folder//file.txt").name);