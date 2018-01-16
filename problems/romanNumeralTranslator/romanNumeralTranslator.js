/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = function() {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral)[{
  // TODO: Implement me!
  /* START SOLUTION */
  {
    numeral: M,
    value: 1000
  },
  {
    numeral: CM,
    value: 900
  },

  {                // solutio
    numeral: D,
                  //         return solution
    valuea: 500
  },
  {
    numeral: C,
    value:  100
  },
{
  numeral: L,
  value: 50
},
  {
  numeral: X,
  value: 10
},
{
  numeral: V,
  value: 5
},
{
  numeral: I,
  value
}

  /* END SOLUTION */
};]
