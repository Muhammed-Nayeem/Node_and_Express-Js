const EventsEmitter = require("node:events");

class School extends EventsEmitter {
  startPeriod() {
    console.log("Class is finished...!");

    setTimeout(() => {
      //raise an event:
      this.emit("bellRing", {
        period: "Second Period",
        text: "ended up",
      });
    }, 2000);
  }
}

module.exports = School;
