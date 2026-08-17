"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menu = ["Baguette", "Sourdough", "Croissant", "Lemon Tart", "Cappuccino"];

console.log(menu);
console.log(menu[0]);
console.log(menu[menu.length - 1]);
console.log(menu.length);

// Ledi Results:
// Whole array → ["Baguette", "Sourdough", "Croissant", "Lemon Tart", "Cappuccino"]
// First item → Baguette
// Last item → Cappuccino
// Length → 5

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menu.push("Chocolate Cake");
console.log(menu);
// push() adds an item to the END of the array.

menu.unshift("Espresso");
console.log(menu);
// unshift() adds an item to the BEGINNING of the array.

menu.pop();
console.log(menu);
// pop() removes an item from the END of the array.

menu.shift();
console.log(menu);
// shift() removes an item from the BEGINNING of the array.

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for (const item of menu) {
  console.log(item);
}

// Ledi: I would use a counting for loop when I need the index, and for...of when I only need the values.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

const displayPrices = prices.map((price) => `€${price.toFixed(2)}`);
console.log(displayPrices);

const underFive = prices.filter((price) => price < 5);
console.log(underFive);

const firstOverTen = prices.find((price) => price > 10);
console.log(firstOverTen);

// Ledi :Results:
// map()    → ["€4.50", "€12.00", "€3.20", "€8.00"]
// filter() → [4.5, 3.2]
// find()   → 12
// Ledi: forEach() would return undefined because it performs an action
// for each item but does not create and return a new array or a found value.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

artists.push("Elvis Presley");

for (const artist of artists) {
  console.log(`Artist: ${artist}
Label: Stretch Records`);
}

// Ledi: I did not have to change the loop after adding Elvis Presley;
// the loop automatically processes every artist in the array.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const secondMenu = menu;
secondMenu.push("Cheesecake");
console.log(menu);
console.log(secondMenu);
// Ledi: Both arrays now contain "Cheesecake" because secondMenu and menu refer
// to the same array in memory.

const menuCopy = [...menu];
menuCopy.push("Apple Pie");
console.log(menu.length);
console.log(menuCopy.length);

// Ledi : Results:
// menu.length → 6
// menuCopy.length → 7
// Adding "Apple Pie" to menuCopy did not change menu because the spread operator
// created a separate copy.

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let sum = 0;
for (const number of numbers) {
  sum = sum + number;
}
console.log(`Sum: ${sum}`);
// Ledi: Result: Sum: 128

let largest = numbers[0];
for (const number of numbers) {
  if (number > largest) {
    largest = number;
  }
}
console.log(`Largest: ${largest}`);

// Ledi: Result: Largest: 41

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

const word = "Hallucinations";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed = reversed + word[i];
}
console.log(`Reversed: ${reversed}`);
// Ledi: Result: Reversed: snoitanicullaH

// Count vowels
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
for (const letter of word.toLowerCase()) {
  if (vowels.includes(letter)) {
    vowelCount = vowelCount + 1;
  }
}
console.log(`Vowels: ${vowelCount}`);
// Ledi: Result: Vowels: 6

// Palindrome check
function isPalindrome(text) {
  const lowerText = text.toLowerCase();
  let reversedText = "";

  for (let i = lowerText.length - 1; i >= 0; i--) {
    reversedText = reversedText + lowerText[i];
  }

  return lowerText === reversedText;
}

console.log(`Level: ${isPalindrome("Level")}`);
console.log(`Madam: ${isPalindrome("Madam")}`);
console.log(`Hello: ${isPalindrome("Hello")}`);
// ledi : Results:
// Level: true;
// Madam: true;
// Hello: false;

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
