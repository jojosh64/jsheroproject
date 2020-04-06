const addWithSurcharge = (amt1, amt2) => {
  let sum = amt1 + amt2;
  if (amt1 <= 10) {
    sum = sum + 1;
  } else {
    sum = sum + 2;
  }
  if (amt2 <= 10) {
    sum = sum + 1;
  } else {
    sum = sum + 2;
  }
  return sum;
};
