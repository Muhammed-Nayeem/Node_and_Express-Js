const School = require("./school");
const school = new School();

//register an event listener:
school.on("bellRing", ({ period, text }) => {
  console.log(`We have to run because "${period}" ${text}!`);
});

school.startPeriod();
