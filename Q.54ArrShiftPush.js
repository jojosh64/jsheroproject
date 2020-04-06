const rotate = (arr) => {
  arr.push(arr.shift());
  return arr;
};
