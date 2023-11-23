import { printVariables, rng } from "../lib/CTools.js";
let randInt1 = rng(9);
let randInt2 = rng(15);
let randInt3 = rng(20);
let percentage = rng(100);
let percentInt = rng(1000);

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
/* Strings: A variable type that can contain letters, numbers and symbols. 
Numbers: A variable type that can contain numbers. Can contain integers and decimals. 
Booleans: A variable type that is used to describe the state of data, as either being true or false. 
Undefined: A variable type with an undetermined value. The computer does not know what is inside it.
Null: A variable type that represents a data set with no value, away of describing a data value as empty, like saying it is 0.
 */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/
/* Variable: It's a container, it stores data that can be changed later on.  */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

const ex3 = 12 + 20;

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
const ex4 = x;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/
let name = "John Doe";
const ex5 = name;

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

const ex6 = x - 12;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
const ex7 = [name1 === name2, name1 === name2.toLowerCase()];

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let numStrArr = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

const ex8 = [randInt1, numStrArr[randInt1 - 1]];

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

const ex9 = [randInt1, randInt1 >= 5 ? ">= 5" : "< 5"];

// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = Math.random() < 0.5 ? true : false;
let gender = isMale ? "Male" : "Female";
const ex1Extra = gender;

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let is8 = [
  randInt1,
  randInt2,
  randInt1 + randInt2,
  Math.abs(randInt1 - randInt2),
];
const ex2Extra = [is8, is8.includes(8)];

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let concatVar = "Hello".concat(" There");
const ex3Extra = concatVar;

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

const ex4Extra = [
  [randInt1, randInt2, randInt3].sort(function (a, b) {
    return b - a;
  }),
];

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

const ex5Extra = [randInt1, randInt2, "average:", (randInt1 + randInt2) / 2];

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

const ex6Extra = "String looooooooooooong".length > "String short".length;

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

const ex7Extra = Number.isInteger("Hello there");

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

const ex8Extra = [
  percentage,
  "of",
  percentInt,
  "=",
  (percentInt / 100) * percentage,
];

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

const ex9Extra = [randInt1, randInt1 % 2 == 0];

printVariables({
  ex3,
  ex4,
  ex5,
  ex6,
  ex7,
  ex8,
  ex9,
  ex1Extra,
  ex2Extra,
  ex3Extra,
  ex4Extra,
  ex5Extra,
  ex6Extra,
  ex7Extra,
  ex8Extra,
  ex9Extra,
});
