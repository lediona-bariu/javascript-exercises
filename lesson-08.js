"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.

class Artist {
  constructor(name, genre, totalRuntime) {
    this.name = name;
    this.genre = genre;
    this.totalRuntime = totalRuntime;
  }

  describe() {
    return `${this.name}, ${this.genre}, ${this.totalRuntime} of music`;
  }
}

const artistOne = new Artist("Asake", "Afrobeats", "14:08");
const artistTwo = new Artist("Johnny Cash", "Country", "15:40");

console.log(artistOne.describe());
console.log(artistTwo.describe());

// Ledi: Results:
// Asake, Afrobeats, 14:08 of music
// Johnny Cash, Country, 15:40 of music

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const artists = [];

for (const artist of artistData) {
  const artistInstance = new Artist(artist.name, artist.genre, artist.total);

  artists.push(artistInstance);
}

for (const artist of artists) {
  console.log(artist.describe());
}

// Ledi: Results:
// Pinkfong, Children's music, 11:31 of music
// Adriano Celentano, Italian pop, 20:52 of music
// Asake, Afrobeats, 14:08 of music
// Miyagi and Andy Panda, Hip-hop, 16:21 of music
// Johnny Cash, Country, 15:40 of music

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
// const broken = Artist("Pinkfong", "Children's music", "11:31");
// ! Snippet two, an arrow function used as a method that reads this:
// const single = { title: "Hurt", artist: "Johnny Cash", describe: () => `${this.title} by ${this.artist}` };
// console.log(single.describe());
// * Snippet three, the correct call. Uncomment after part one:
// console.log(new Artist("Asake", "Afrobeats", "14:08").describe());

// Ledi: Snippet one Prediction: TypeError because a class cannot be called without new.
// Actual: TypeError - Class constructor Artist cannot be invoked without 'new'.
// Ledi: Snippet two Prediction: "undefined by undefined" because the arrow function does not get `this` from the single object.
// Actual: undefined by undefined
// Ledi: Snippet three Prediction: This works because correctly creates an instance
// Actual: Asake, Afrobeats, 14:08 of music

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.

class FeaturedArtist extends Artist {
  constructor(name, genre, totalRuntime, blurb) {
    super(name, genre, totalRuntime);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()} Featured: ${this.blurb}`;
  }
}

const featuredArtist = new FeaturedArtist(
  "Johnny Cash",
  "Country",
  "15:40",
  "A legendary voice in country music.",
);

console.log(featuredArtist.describe());

// Ledi: Result: Johnny Cash, Country, 15:40 of music Featured: A legendary voice in country music.

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:

// Ledi: Equivalent to a class constructor: constructor(name, genre) { ... }
function ArtistOld(name, genre) {
  // Ledi: Equivalent to properties assigned inside a class constructor.
  this.name = name;
  this.genre = genre;
}

// Ledi: Equivalent to the class method: describe() { ... }
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};

// Ledi: Equivalent to the class method: tag() { ... }
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};

// Ledi: Testing the old constructor and prototype methods.
const oldArtist = new ArtistOld("Johnny Cash", "Country");

console.log(oldArtist.describe());
console.log(oldArtist.tag());

// Ledi: Results:
// Johnny Cash, Country
// #country

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

Artist.named = function (instances, name) {
  return instances.find((artist) => artist.name === name);
};

const foundArtist = Artist.named(artists, "Johnny Cash");

console.log(foundArtist.describe());

// Ledi: Result: Johnny Cash, Country, 15:40 of music

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
