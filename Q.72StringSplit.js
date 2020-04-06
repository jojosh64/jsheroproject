const add = (string) => {
  let arrOfNums = string.split("+");
  let sum = 0;

  for (let i = 0; i < arrOfNums.length; i++) {
    let currentNum = parseInt(arrOfNums[i]);

    sum = sum + currentNum;
  }
  return sum;
};
