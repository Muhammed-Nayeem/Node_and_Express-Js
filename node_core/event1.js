const EventEmitter = require("node:events");
const emitter = new EventEmitter();

//Event Handler:
const myEvent = ({ eventName, text }) => {
  console.log(`A "${eventName}" ${text}!`);
};

//Register an event listener:
emitter.on("scream", myEvent);

//Raise an Event:
emitter.emit("scream", {
  eventName: "Scream",
  text: "is detected",
});
