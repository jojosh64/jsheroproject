const add = (arr, elem) => {
  if (arr.indexOf(elem) === -1) {
    arr.push(elem);
  }
  return arr;
};
