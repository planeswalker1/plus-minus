// pseudo code:
// task:
// given an array of numbers
// print out the ratio of positive, negative and zero numbers
// each on a separate line rounded to six decimal places.

// have counter variables for positive, negative and zero numbers
// loop through each item in the array
// have a condition to check if each item of the array is positive, negative or zero
// add a counter to the corresponding counter variable
// print the ratio of positive numbers rounded to the 6th decimal place
// print the ratio of negative numbers rounded to the 6th decimal place
// print the ratio of zeros rounded to the 6th decimal place


function returnPlusMinusRatios(numbers) {
  // counter variables for positive, negative and zero numbers
  let positiveNumberCounter = 0;
  let negativeNumberCounter = 0;
  let zeroNumberCounter = 0;

  // check if each item of the array is positive, negative, or zero
  // add a counter to the corresponding variable
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumberCounter++;
    } else if (numbers[i] === 0) {
      zeroNumberCounter++;
    } else {
      negativeNumberCounter++;
    }
  }
  // log the ratio of positive, negative and zero numbers
  console.log((positiveNumberCounter / numbers.length).toPrecision(6));
  console.log((negativeNumberCounter / numbers.length).toPrecision(6));
  console.log((zeroNumberCounter / numbers.length).toPrecision(6));
}

returnPlusMinusRatios([1, 2, 4, -1, -2, 0]);