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

const convertToRomanNumeral = (arabicNumber) => {
  const MAX_POSSIBLE_ROMAN_NUMERAL = 3999;

  if (arabicNumber > MAX_POSSIBLE_ROMAN_NUMERAL) return "Invalid Number";
  let returnedNumeral = "";

  for (let romanNumeral in romanNumeralsWithValues) {
    let currentValue = romanNumeralsWithValues[romanNumeral];

    while (arabicNumber >= currentValue) {
      returnedNumeral += romanNumeral;
      arabicNumber -= currentValue;
    }
  }
  return returnedNumeral;
};
