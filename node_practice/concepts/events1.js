const EventsEmitter = require("node:events");

const emitter = new EventsEmitter();

//Event handler:
const myEvent = ({eventName, text}) => {
  console.log(`A "${eventName}" ${text}!`);
};

//Register an event listener:
emitter.on("scream", myEvent);

setTimeout(() => {
  //Raise an Event:
  emitter.emit("scream", {
    eventName: "Scream",
    text: "is detected",
  });
}, 3000);
