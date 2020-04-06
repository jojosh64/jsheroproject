const gcd = (num1, num2) => {
  let highestNum;
  let testNum = 0;
  let currentHighestDenominator;

  if (num1 > num2) highestNum = num1;

  if (num2 > num1) highestNum = num2;

  if (num1 === num2) return num1;
  while (testNum <= highestNum) {
    if (num1 % testNum === 0 && num2 % testNum === 0) {
      currentHighestDenominator = testNum;
    }
    testNum++;
  }
  return currentHighestDenominator;
};

const lcm = (num1, num2) => (num1 * num2) / gcd(num1, num2);
