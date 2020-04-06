const addWithSurcharge = (amt1, amt2) => {
  let sum = amt1 + amt2;

  if (amt1 <= 10) {
    sum = sum + 1;
  } else if (amt1 <= 20) {
    sum = sum + 2;
  } else if (amt1 > 20) {
    sum = sum + 3;
  }

  if (amt2 <= 10) {
    sum = sum + 1;
  } else if (amt2 <= 20) {
    sum = sum + 2;
  } else if (amt2 > 20) {
    sum = sum + 3;
  }

  return sum;
};
