// setting server using node js
const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("app/index.html", "utf8");
// Make sure the path to your CSS file is correct here!
const homeStyle = readFileSync("app/style.css", "utf8");

const js = readFileSync("./app/app.js", "utf8");

const data = [
    {
        name: "kenneth",
        age: 25,
        height: "6'1",
    },

    {
        name: "john",
        age: 18,
        height: "6'5",
    }
]

//getting html file contents 

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === "/" && method === "GET") {
        response.writeHead(200, {
            "content-type": "text/html"
        });
        response.write(homePage);
        response.end();
    }

    // ADD THIS BLOCK to handle the CSS request
    else if (url === "/style.css") {
        response.writeHead(200, { "content-type": "text/css" }); // Important: text/css
        response.write(homeStyle);
        response.end();
    }


    // handles js request 
    else if (url === "/app.js") {
        response.writeHead(200, { "content-type": "text/javascript" });
        response.write(js);
        response.end();
    }

    else if (url === "/about" && method === "GET") {
        response.writeHead(200, {
            "content-type": "text/html"
        });
        response.write("<h1>About Page</h1>");
        response.end();
    } else {

        response.writeHead(404, {
            "content-type": "text/html"
        });
        response.write("<h1>Page Not Found</h1>");
        response.end();

    }
})

server.listen(3000);