const midrange = (num1, num2, num3) =>
  (Math.min(num1, num2, num3) + Math.max(num1, num2, num3)) / 2;

console.log(midrange(3, 9, 1));
