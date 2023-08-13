const EventEmitter = require("node:events");

class School extends EventEmitter {
  startPeriod() {
    console.log("Class started...!");

    setTimeout(() => {
      //raise an event emitter:
      this.emit("bellRing", {
        period: "Second Period",
        text: "ended up",
      });
    }, 3000);
  }
}

module.exports = School;
