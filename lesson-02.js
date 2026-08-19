"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "Bloom Corner";
// const because the shop name should not change while the program runs.

let flowersInStock = 120;
// let because the stock can change when flowers are sold or delivered.

const city = "Munich";
// const because the shop location is fixed for this example.

let isOpen = true;
// let because the shop can open or close during the day.

const deliveryFee = 4.5;
// const because the delivery fee is fixed in this example.

console.log(shopName);
console.log(flowersInStock);
console.log(city);
console.log(isOpen);
console.log(deliveryFee);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName);
console.log(typeof flowersInStock);
console.log(typeof city);
console.log(typeof isOpen);
console.log(typeof deliveryFee);

console.log(typeof null);
console.log(typeof undefined);

// Ledi: typeof null returns "object", which is a famous historical bug in JavaScript.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let nextDelivery;
const specialOrder = null;

console.log(nextDelivery);
console.log(specialOrder);

console.log(typeof nextDelivery);
console.log(typeof specialOrder);

// Ledi: undefined means no value has been assigned, while null means an empty value was assigned intentionally.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const price = Number(priceText);
console.log(price);
console.log(typeof price);

const count = Number(countText);
console.log(count);
console.log(typeof count);

const flag = Boolean(flagText);
console.log(flag);
console.log(typeof flag);

const numberOfCustomers = 25;
const customersText = String(numberOfCustomers);
console.log(customersText);
console.log(typeof customersText);

// Ledi: Number() would produce NaN if the string did not contain a valid number.

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
// const bakeryName = "Maison Sarah";
// bakeryName = "The Corner Bakery";
// openingHour = 7;
// console.log(loafCount);
// let loafCount = 12;

let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";
// Ledi: Changed bakeryName from const to let because its value is reassigned.

const openingHour = 7;
// Ledi: Declared openingHour before assigning a value.

let loafCount = 12;
console.log(loafCount);
// Ledi: Moved the loafCount declaration before console.log so it is initialized before being read.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 15;
let b = 32;

const temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
