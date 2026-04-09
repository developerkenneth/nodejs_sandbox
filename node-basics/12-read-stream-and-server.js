const fs = require("fs");
const http = require("http");


const data = [
        "kenneth",
        "uche",
        "ada"
]
const server = http.createServer((request, response) => {
        const url = request.url;
        const method = request.method;

        if (url === "/") {

                const readStream = fs.createReadStream("files/created_big_file.txt", "utf-8");

                readStream.pipe(response);
                readStream.on("error", err => response.end(err));
        }
        
})


server.listen(3000);