import * as fs from "fs"; //for callback
//no try catch block because its callback not promises

fs.mkdir("c://nodejs//hola", (error) => {
  if (error) throw error;
  console.log("Folder created");
});
