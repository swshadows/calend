import format from "./format";

const runClock = (c) => {
  const d = new Date();
  const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  c.value = {
    hours: format(d.getHours()),
    minutes: format(d.getMinutes()),
    seconds: format(d.getSeconds()),
    day: format(d.getDate()),
    month: format(d.getMonth() + 1),
    year: d.getFullYear(),
    weekday: weekdays[d.getDay()],
  };
};

export default runClock;
