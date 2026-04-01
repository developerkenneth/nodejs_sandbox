const { writeFileSync } = require("fs");

for (let i = 0; i <= 20000; i++) {
    writeFileSync(`files/created_big_file.txt`, `hello world I am just creating a big file ${i} \n`, { flag: "a" });
}