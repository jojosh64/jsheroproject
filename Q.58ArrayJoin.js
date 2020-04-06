const list = (arr) => {
  lastValue = arr.pop();
  everythingElse = arr.join(", ");
  finalStr = everythingElse + ` and ${lastValue}`;
  return finalStr;
};
