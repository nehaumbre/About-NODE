import * as fs from "fs";
//* dont forget the Sync fs.mkdirSync like so for every function in FS module

//for synchronous execution

// fs.mkdirSync("c://nodejs//Sync");
fs.mkdirSync("c://nodejs//Sync//nested");

// This tries to create the folder nested inside c://nodejs//Sync.
// If Sync does NOT exist yet, this throws an error like:
//! Error: ENOENT: no such file or directory, mkdir 'c://nodejs//Sync//nested'
// Because Node can’t create a subfolder inside a folder that doesn’t exist.


// You can also create nested folders by passing { recursive: true }:
fs.mkdirSync("c://nodejs//Sync//nested", { recursive: true });
// This means: "Create the entire directory path if it doesn’t exist".

// So if Sync doesn’t exist, it will create Sync first, then create nested inside it.

// If either folder already exists, it won’t throw an error — it just makes sure the full path is ready.
// When to use { recursive: true }
// When you want to safely create nested directories without worrying about intermediate folders existing.

// Very useful when you want to ensure a folder structure is there before writing files.