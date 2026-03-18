const console = require("console");
const path = require("path");

console.log(path); // shows all properties and methods in the path module
console.log(path.sep); // returns /

let newPath = path.join("files/","text.txt"); //joins path to string

console.log(newPath);
console.log(path.basename(newPath));

console.log(__filename); //returns the full file path
console.log(__dirname); //returns the directory name


//getting the absolute path

const absolute = path.resolve(__dirname, "files","text.txt");
console.log(absolute);
