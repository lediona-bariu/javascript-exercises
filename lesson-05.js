"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// Ledi The pricing chain from the previous exercise, rewrote inside a declared function :
function checkOrderSize(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}

checkOrderSize(15);
checkOrderSize(10);
checkOrderSize(5);
checkOrderSize(20);

// Ledi: Results:
// 15 → Large order, call the bakery ahead
// 10 → Medium order, ready in an hour
// 5  → Small order, walk right in
// 20 → Large order, call the bakery ahead

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.

function checkOrderSize(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

console.log(checkOrderSize(15));
console.log(checkOrderSize(10));
console.log(checkOrderSize(5));
console.log(checkOrderSize(20));

// Ledi: Returning the message makes the function more reusable because the result can be used elsewhere.

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:
const double = function (n) {
  return n * 2;
};
const shout = (text) => `${text.toUpperCase()}!`;

console.log(double(5));
console.log(shout("hello"));

// Ledi: Results:
// double(5) → 10
// shout("hello") → HELLO!

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.

function checkOrderSizeDefault(orderSize = 5) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

console.log(checkOrderSizeDefault(10));
console.log(checkOrderSizeDefault());

// Ledi: Results:
// checkOrderSizeDefault(10) → Medium order, ready in an hour
// checkOrderSizeDefault() → Small order, walk right in

// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.

// * The starter counting pattern for repeat(callback, count):
// * let i = 1;
// * while (i <= count) { call the callback here; i = i + 1; }

function repeat(callback, count) {
  let i = 1;

  while (i <= count) {
    callback();
    i = i + 1;
  }
}

repeat(() => console.log("Fresh bread is ready!"), 3);

// Ledi: Result:
// Fresh bread is ready!
// Fresh bread is ready!
// Fresh bread is ready!

// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
const shopName = "Maison Sarah";
function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Anna")); // prediction:  Welcome to The Corner Bakery, Anna
console.log(shopName); // prediction: Maison Sarah
if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // prediction: visible in here
}
// console.log(insideIf); // prediction first, then uncomment to verify: Ledi: verified
// Ledi: prediction: ReferenceError because insideIf only exists inside the if block

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(`${0}°C = ${celsiusToFahrenheit(0).toFixed(2)}°F`);
console.log(`${20}°C = ${celsiusToFahrenheit(20).toFixed(2)}°F`);
console.log(`${30}°C = ${celsiusToFahrenheit(30).toFixed(2)}°F`);

console.log(`${32}°F = ${fahrenheitToCelsius(32).toFixed(2)}°C`);
console.log(`${68}°F = ${fahrenheitToCelsius(68).toFixed(2)}°C`);
console.log(`${86}°F = ${fahrenheitToCelsius(86).toFixed(2)}°C`);

// Ledi: Results:
// 0°C  = 32.00°F
// 20°C = 68.00°F
// 30°C = 86.00°F
//
// 32°F = 0.00°C
// 68°F = 20.00°C
// 86°F = 30.00°C

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:
// const answer = 42;
// console.log(answer.toUpperCase());

const answer = 42;

try {
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`Something went wrong: ${error.message}`);
}

console.log("The program continued successfully.");

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
