const firstWord = string => {
  let firstSpace = string.indexOf(" ");
  return string.substr(0, firstSpace);
};
