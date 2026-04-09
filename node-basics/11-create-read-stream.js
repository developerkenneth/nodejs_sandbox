const console = require("console");
const  {createReadStream} = require("fs");
const stream = createReadStream("files/created_big_file.txt", {highWaterMark: 9000, encoding : 'utf8'});

// ensure u always put in the encoding to avoid getting file read as bits
// secondarily use the highWaterMark property for?
// also u can check for errors


stream.on("data", function(result){
        console.log(result);
})

// checking for errors

stream.on("error", error => console.error(error));