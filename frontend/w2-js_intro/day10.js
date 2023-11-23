import { printVariables, rng } from "../lib/CTools.js";
import moviesArray from "./lib/movies.json" assert { type: "json" };
/* EXERCISE A
Create a variable called test and assign a string value to it.
*/

let test = "test";
const exA = test;

/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let sum = 10 + 20;
const exB = sum;

/* EXERCISE C
Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = rng(20);
const exC = random;

/* EXERCISE D
Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

const me = {
  name: "Connor",
  surname: "W",
  age: 27,
};
const exD = me;

/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously create object.
*/

const exE = delete me.age;

/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/

me.skills = ["JS", "C#", "Java"];
const exF = me;

/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/

me.skills.pop();
const exG = me;

// JS Functions

/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
*/

function dice() {
  return rng(6);
}

/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(int1, int2) {
  return int1 > int2 ? int1 : int2;
}

/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

function splitMe(string) {
  return string.split(" ");
}

/* EXERCISE 4
Write a function called deleteOne which receives a string and a boolean as parameters.
If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

function deleteOne(string, boolean) {
  return boolean == true ? string.slice(1) : string.slice(0, -1);
}

/* EXERCISE 5
Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"
*/

function onlyLetters(string) {
  return string.replace(/[0-9]/g, "");
}

/* EXERCISE 6
Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

function isThisAnEmail(string) {
  return string.includes("@") ? true : false;
}

/* EXERCISE 7
Write a function called whatDayIsIt that should return the current day of the week.
*/

function whatDayIsIt() {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[new Date().getDay()];
}

/* EXERCISE 8
Write a function called rollTheDices which receives a number as a parameter.
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a sum property holding the sum of all values extracted
and a values array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
sum: 10
values: [3, 3, 4]
}
*/

function rollTheDices(number) {
  let value = [];
  let sum = {
    sum: 0,
  };
  for (let i = 0; i < number; i++) {
    let num = dice();
    sum.sum += num;
    value.push(num);
  }
  return [value, sum];
}

/* EXERCISE 9
Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

function howManyDays(date) {
  return Math.ceil((new Date() - date) / (1000 * 60 * 60 * 24));
}

/* EXERCISE 10
Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.
*/

function isTodayMyBirthday() {
  const today = new Date();
  const birthday = new Date("07/23/1996");
  return (
    today.getDate() === birthday.getDate() &&
    today.getMonth() === birthday.getMonth()
  );
}

/* EXERCISE 11
Write a function called deleteProp which receives an object and a string as parameters,
and returns the given object after deleting its property named as the given string.
*/

let obj = { string: "deleted" };
function deleteProp(obj) {
  delete obj.string;
  return obj;
}

/* EXERCISE 12
Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/

function oldestMovie(moviesArray) {
  return moviesArray.reduce((oldest, movie) => {
    if (movie.Year < oldest.Year) {
      return movie;
    }
    return oldest;
  });
}

/* EXERCISE 13
Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

function countMovies(moviesArray) {
  return moviesArray.length;
}

/* EXERCISE 14
Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/

function onlyTheTitles(moviesArray) {
  return moviesArray.map((movie) => movie.Title);
}

/* EXERCISE 15
Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

function onlyInThisMillenium(moviesArray) {
  return moviesArray
    .filter((movie) => movie.Year >= 2000)
    .map((movie) => [movie.Title, movie.Year]);
}

/* EXERCISE 16
Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/

function getMovieByID(moviesArray, id) {
  return moviesArray.filter((movie) => movie.imdbID == id);
}

/* EXERCISE 17
Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

function sumAllTheYears(moviesArray) {
  let years = 0;
  for (let movie of moviesArray) {
    years += parseInt(movie.Year);
  }
  return years;
}

/* EXERCISE 18
Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

function searchByTitle(moviesArray, str) {
  return moviesArray
    .filter((movie) => movie.Title.includes(str))
    .map((movie) => movie.Title);
}

/* EXERCISE 19
Write a function called searchAndDivide which receives a string as a parameter and returns an object;
this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
and another array unmatch with all the remaining ones.
*/

function searchAndDivide(moviesArray, str) {
  const obj = { match: [], unmatch: [] };
  moviesArray.forEach((movie) =>
    movie.Title.includes(str)
      ? obj.match.push(movie.Title)
      : obj.unmatch.push(movie.Title)
  );
  return obj;
}

/* EXERCISE 20
Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

function removeIndex(moviesArray, num) {
  moviesArray.splice(num, 1);
  return moviesArray.map((movie) => movie.Title);
}

// [EXTRAS] JS Advanced
/* EXERCISE 21
Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
Example:
halfTree(3)
*
**
***
*/

function halfTree(height) {
  let tree = [];
  for (let i = 1; i <= height; i++) {
    let stars = "*".repeat(i);
    tree.push(stars);
  }
  return tree;
}

/* EXERCISE 22
Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
Example:
tree(3)
*
***
*****
*/

function tree(height) {
  let tree = [];
  for (let i = 1; i <= height; i++) {
    let stars = "*".repeat(2 * i - 1);
    tree.push(stars);
  }
  return tree;
}

/* EXERCISE 23
Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

function isItPrime(num) {
  return [num, num % 2 != 0 ? true : false];
}

printVariables({
  exA,
  exB,
  exC,
  exD,
  exE,
  exF,
  exG,
  ex1: dice(),
  ex2: whoIsBigger(4, 5),
  ex3: splitMe("I love coding"),
  ex4: deleteOne("delete", true),
  ex5: onlyLetters("letters 123456 122533 4345"),
  ex6: isThisAnEmail("gmail"),
  ex7: whatDayIsIt(),
  ex8: rollTheDices(5),
  ex9: howManyDays(new Date("11/06/2022")),
  ex10: isTodayMyBirthday(),
  ex11: deleteProp(obj),
  ex12: oldestMovie(moviesArray),
  ex13: countMovies(moviesArray),
  ex14: onlyTheTitles(moviesArray),
  ex15: onlyInThisMillenium(moviesArray),
  ex16: getMovieByID(moviesArray, "tt2395427"),
  ex17: sumAllTheYears(moviesArray),
  ex18: searchByTitle(moviesArray, "Lord"),
  ex19: searchAndDivide(moviesArray, "Lord"),
  ex20: removeIndex(moviesArray, 2),
  ex21: halfTree(3),
  ex22: tree(3),
  ex23: isItPrime(rng(10)),
});
