import path from "path";

console.log(path.basename("/foo/bar/baz.txt")); //*Gives this output : baz.txt
console.log(path.basename("/foo/bar/baz.txt", ".txt")); //*Gives this output : baz
console.log(path.dirname("/foo/bar/baz.txt")); //* Gives this output : /foo/bar
console.log(path.extname("/foo/bar/baz.txt")); //* Gives this output : .txt
console.log(path.join("/foo/bar/", "foofoo", "baz.txt")); // * Gives this output : \foo\bar\foofoo\baz.txt

//* Going up a level in dir
console.log(path.join("/foo/bar", "..")); //  * Gives this output : * \foo

