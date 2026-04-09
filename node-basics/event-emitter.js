const event = require("events");
const customEvent = new event();
customEvent.on("response", ()=> console.log("hello world!, data received"));
customEvent.on("isLoggedIn", (userName) => {
    console.log(`${userName} is Logged in`);
})
customEvent.emit("response");
customEvent.emit("isLoggedIn", "Andrew");
console.log(customEvent.eventNames());
