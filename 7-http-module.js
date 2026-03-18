const http = require("http");

const data = [
    {
        id: 1,
        age: 25,
        name: "john doe",
        email: "johndoe@gmail.com"
    },
    {
        id: 2,
        age: 33,
        name: "jane doe",
        email: "janedoe@gmail.com"
    },
    {
        id: 3,
        age: 18,
        name: "jessica doe",
        email: "jessicadoe@gmail.com"
    }
]
const server = http.createServer((request, response) => {
    const method = request.method;
    const url = request.url;

    if (method === "GET" && url === "/") {
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(data));
    }

    if (method === "GET" && url === "/about") {
        response.end("<h1>About us</h1> <p>Get to know more about us </p>");
    }

    response.end(`
            <h1>404 Error </h1>
            <p>Oops page not found</p>
            <a href="/">back to home </a>
        `);

})


server.listen(3000, () => console.log("server running on port 3000"));