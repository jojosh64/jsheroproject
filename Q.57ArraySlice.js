const halve = (arr) => {
  let middle = arr.length / 2;

  if (arr.length % 2 != 0) {
    return arr.slice(0, middle + 1);
  } else return arr.slice(0, middle);
};
