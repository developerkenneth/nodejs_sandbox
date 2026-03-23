const { readFile } = require("fs");

console.log("first task has started already");

readFile("files/result.txt", "utf8", (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
    console.log("task has been completed successfully");
});

console.log("second task started already");