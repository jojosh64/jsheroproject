const romanNumeralsWithValues = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
const isARomanNumeralPair = (pairOfNumerals) =>
  romanNumeralsWithValues[pairOfNumerals] != undefined;

const valueOfRomanNumerals = (arrayOfNumerals) => {
  let sum = 0;

  for (let index = 0; index < arrayOfNumerals.length; index++) {
    let currentNumeral = arrayOfNumerals[index];
    let pairOfNumerals = currentNumeral + arrayOfNumerals[index + 1];

    if (isARomanNumeralPair(pairOfNumerals)) {
      sum += romanNumeralsWithValues[pairOfNumerals];
      index++;
    } else {
      sum += romanNumeralsWithValues[currentNumeral];
    }
  }
  return sum;
};

const convertRomanNumeralToNumber = (romanNumerals) => {
  let arrayOfNumerals = romanNumerals.toUpperCase().split("");
  let finalNumber = valueOfRomanNumerals(arrayOfNumerals);

  return finalNumber;
};
