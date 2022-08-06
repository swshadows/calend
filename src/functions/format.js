const format = (arg) => {
  if (arg < 10) return `0${arg}`;
  else return arg;
};

export default format;
