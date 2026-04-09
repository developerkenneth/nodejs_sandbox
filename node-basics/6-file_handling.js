const { readFileSync, writeFileSync } = require("fs"); //getting both read and write and methods from the fs module


//read file takes two param the 1st : file path, 2nd : enctype
const fileRead = readFileSync(`${__dirname}/files/text.txt`, "utf-8");
console.log(fileRead);

// write to a file  using writeFile... this overwrite a particular file
writeFileSync(`${__dirname}/files/result.txt`, `kindly find here the result:${fileRead}`);
