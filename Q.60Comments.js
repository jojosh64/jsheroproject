const median = (arr) => {
  if (arr.length % 2 != 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    num1 = arr[Math.floor((arr.length - 1) / 2)];
    num2 = arr[Math.ceil((arr.length - 1) / 2)];
    return (num1 + num2) / 2;
  }
};
