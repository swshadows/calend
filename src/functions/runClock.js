import format from "./format";

const runClock = (c) => {
  const d = new Date();
  c.value = {
    hours: format(d.getHours()),
    minutes: format(d.getMinutes()),
    seconds: format(d.getSeconds()),
    day: format(d.getDay()),
    month: format(d.getMonth() + 1),
    year: d.getFullYear(),
  };
};

export default runClock;
