const parseFirstInt = (string) => {
  let i = 0;

  while (i < string.length) {
    if (Number.isNaN(parseInt(string.charAt(i)))) {
      i++;
    } else {
      break;
    }
  }

  let substr = string.substring(i - 1);
  return parseInt(substr, 10);
};
