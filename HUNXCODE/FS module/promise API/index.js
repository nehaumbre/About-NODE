import * as fs from "fs/promises";
//The fs (File System) module in Node.js is a core module that allows you to work
// with the file system — reading, writing, updating, deleting files and directories.

// You can use it in synchronous or asynchronous ways.

// creating directories
// try {
//   // await fs.mkdir('c://nodejs ')
//   await fs.mkdir("c://nodejs//zoom//foo", { recursive: true });// * folder inside folder
//   console.log("Folder created");
// } catch (error) {
//   console.log(error);
// }
//
// to read  the content
// try {
//   const files = await fs.readdir("c://nodejs");// read dir
//   for (const file of files) {
//     console.log(files);
//   }
// } catch (error) {
//   console.log(error);
// }

// read content of file

// try {
//   const files = await fs.readFile("c://nodejs//k.txt",  'utf8');// read file
//   console.log(files);
// } catch (error) {
//   console.log(error);
// }

//remove : directory should be empty

// try {
//   await fs.rmdir("c://nodejs//zoom//foo");
// } catch (error) {
//   console.log(error);
// }

//create and write to file
// try {
//   await fs.writeFile("README.md", "Hello world");
// } catch (error) {
//   console.log(error);
// }


// try {
//   await fs.appendFile("README.md", "\nthis is a new line") // prints the  suggested line in README.md
// } catch (error) {
//   console.log(error);
// }

//copying contents of one file to another
// try {
//   await fs.copyFile("README.md", "text.txt") 
// } catch (error) {
//   console.log(error);
// }

//get file information: stat
try {
  const info = await fs.stat('README.md');
  console.log(info);
  console.log("is it directory", info.isDirectory());
  console.log("is it file", info.isFile());
  console.log("is it block device", info.isBlockDevice()); //(e.g., hard drives, USBs)
  console.log("is it character device", info.isCharacterDevice());//(e.g., keyboard, serial ports)
  console.log("is it fifo", info.isFIFO());//Checks for a FIFO (named pipe)
  console.log("is it socket", info.isSocket());//Checks if it's a UNIX socket (for interprocess communication)

} catch (error) {
  console.log(error);
}