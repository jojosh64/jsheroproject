const sort = (arr) => {
  if (arr[0] > arr[2]) {
    let temp = arr[0];
    arr[0] = arr[2];
    arr[2] = temp;
  }
  if (arr[0] > arr[1]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  if (arr[1] > arr[2]) {
    let temp = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
  }
  return arr;
};
