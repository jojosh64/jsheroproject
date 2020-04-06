const flat = (arr) => {
  let flattenArr = arr.concat.apply([], arr);
  return flattenArr;
};
