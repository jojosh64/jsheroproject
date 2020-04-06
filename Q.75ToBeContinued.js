const digitsum = (num) => {
  let numArray = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    let currentNum = parseInt(numArray[i]);
    sum += currentNum;
  }
  return sum;
};
