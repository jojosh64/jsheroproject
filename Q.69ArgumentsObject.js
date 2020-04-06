const max = function () {
  let max = 0;

  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }
  return max;
};
