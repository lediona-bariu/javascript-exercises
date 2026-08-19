"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const menuItem = {
  name: "Raspberry Pistachio Croissant",
  price: 4.8,
  vegetarian: true,
  category: "Pastry",
};

console.log(menuItem.name);
console.log(menuItem.price);

const propertyKey = "category";
console.log(menuItem[propertyKey]);

// Ledi: Bracket notation is required because the property name is stored in a variable.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

menuItem.describe = function () {
  return `${this.name} is a ${this.category} item, costs €${this.price}, and vegetarian: ${this.vegetarian}.`;
};

console.log(menuItem.describe());

// Ledi: Result: Raspberry Pistachio Croissant is a Pastry item, costs €4.8, and vegetarian: true.

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menuItems = [
  {
    name: "Raspberry Pistachio Croissant",
    price: 4.8,
    vegetarian: true,
  },
  {
    name: "Sourdough Bread",
    price: 3.5,
    vegetarian: true,
  },
  {
    name: "Ham and Cheese Croissant",
    price: 5.2,
    vegetarian: false,
  },
  {
    name: "Chocolate Cake",
    price: 4.5,
    vegetarian: true,
  },
  {
    name: "Chicken Sandwich",
    price: 6.5,
    vegetarian: false,
  },
];

for (const item of menuItems) {
  console.log(
    `${item.name} - €${item.price.toFixed(2)} - Vegetarian: ${item.vegetarian}`,
  );
}

// Ledi: Results:
// Raspberry Pistachio Croissant - €4.80 - Vegetarian: true
// Sourdough Bread - €3.50 - Vegetarian: true
// Ham and Cheese Croissant - €5.20 - Vegetarian: false
// Chocolate Cake - €4.50 - Vegetarian: true
// Chicken Sandwich - €6.50 - Vegetarian: false

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const vegetarianNames = menuItems
  .filter((item) => item.vegetarian === true)
  .map((item) => item.name);

console.log(vegetarianNames);

const cheapItem = menuItems.find((item) => item.price < 3);

console.log(cheapItem);

// Ledi: Results: Vegetarian items: ["Raspberry Pistachio Croissant", "Sourdough Bread", "Chocolate Cake"]
// Ledi: First item cheaper than €3: undefined
// Ledi: find() returns undefined when no item matches the condition.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const selectedItem = menuItems[0];

console.log(Object.keys(selectedItem));
console.log(Object.values(selectedItem));

for (const [key, value] of Object.entries(selectedItem)) {
  console.log(`${key}: ${value}`);
}

// Ledi: Results: // Keys → ["name", "price", "vegetarian"]
// Values → ["Raspberry Pistachio Croissant", 4.8, true]
// name: Raspberry Pistachio Croissant
// price: 4.8
// vegetarian: true

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const originalItem = menuItems[1];
const secondItem = originalItem;

secondItem.price = 4.0;

console.log(originalItem);
console.log(secondItem);

// Ledi: Both objects now show price: 4 because originalItem and secondItem
// refer to the same object in memory.

const copiedItem = { ...originalItem, price: 5.0 };

console.log(originalItem);
console.log(copiedItem);

// Ledi: Results:
// originalItem → { name: "Sourdough Bread", price: 4, vegetarian: true }
// copiedItem   → { name: "Sourdough Bread", price: 5, vegetarian: true }
// The spread copy has a different price, while the other properties remain the same.

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const wordCount = {};

for (const word of words) {
  if (wordCount[word]) {
    wordCount[word] = wordCount[word] + 1;
  } else {
    wordCount[word] = 1;
  }
}

console.log(wordCount);

const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

console.log(sortedWords);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
