const concatUp = (arr1, arr2) => {
  if (arr1.length < arr2.length) {
    return arr1.concat(arr2);
  }
  if (arr1.length > arr2.length) {
    return arr2.concat(arr1);
  }
  if (arr1.length === arr2.length) {
    return arr1.concat(arr2);
  }
};
