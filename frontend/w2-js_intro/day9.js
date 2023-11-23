import { printVariables, rng } from "../lib/CTools.js";
let randInt1 = rng(10);
let randInt2 = rng(15);
let randInt3 = rng(25);
let randInt4 = rng(1000);
/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
  return [l1, l2, l1 * l2];
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(l1, l2) {
  return [l1, l2, l1 == l2 ? (l1 + l2) * 3 : l1 + l2];
}

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(randInt3) {
  let diff = Math.abs(randInt3 - 19);
  return [randInt3, randInt3 > 19 ? diff * 3 : diff];
}

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {
  return [n, (n >= 20 && n <= 100) || n == 400];
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(string) {
  const stringArray = string.split(" ");
  return stringArray[0] == "strive"
    ? string
    : stringArray.unshift("strive") && stringArray.join(" ");
}

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3And7(randInt3) {
  return [randInt3, randInt3 % 7 == 0 || randInt3 % 3 == 0];
}

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(string) {
  const strArr = string.split("");
  return strArr.reverse() && strArr.join("");
}

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(string) {
  const newWord = string.slice(1, -1);
  return newWord;
}

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
  const randInts = [];
  for (let i = 0; i < n; i++) {
    const randInt = rng(10);
    randInts.push(randInt);
  }
  return randInts;
}

// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

function checkArray() {
  let total = 0;
  const randInts = giveMeRandom(rng(10));
  for (let int of randInts) {
    int > 5 ? (total += int) : (total = total);
  }
  return [randInts, total];
}

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

const arrOfItems = [];
for (let i = 0; i < 5; i++) {
  let item = {
    price: rng(20),
    name: `item${i}`,
    id: rng(100),
    quantity: rng(5),
  };
  arrOfItems.push(item);
}

console.log(arrOfItems);

function shoppingCartTotal() {
  let shoppingCart = arrOfItems;
  let shoppingCartTotal = 0;
  for (let item of shoppingCart) {
    shoppingCartTotal += item.price * item.quantity;
  }

  return [shoppingCart, shoppingCartTotal];
}

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

function addToShoppingCart(newItem) {
  let shoppingCart = [...arrOfItems];
  shoppingCart.push(newItem);
  return shoppingCart.length;
}

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

function maxShoppingCart() {
  let shoppingCart = [...arrOfItems];
  let maxPrice = 0;
  for (const item of shoppingCart) {
    if (item.price > maxPrice) {
      maxPrice = item.price;
    }
  }
  return [shoppingCart.map((item) => item.price), maxPrice];
}

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart() {
  let shoppingCart = [...arrOfItems];
  return shoppingCart.pop();
}

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil(x) {
  let aboveX = 0;
  while (aboveX < 3) {
    let randInt = rng(10);
    console.log(randInt);
    if (randInt > x) {
      aboveX++;
    } else aboveX = 0;
  }
  return "Fin";
}

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

function average(array) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") {
      x = x + array[i];
      y++;
    }
  }
  return x / y;
}

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

function longest(array) {
  let max = "";
  for (let i = 0; i < array.length; i++) {
    array[i].length > max.length ? (max = array[i]) : max;
  }
  return max;
}

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

function antiSpam(emailContent) {
  return emailContent.includes("SPAM") || emailContent.includes("SCAM")
    ? false
    : true;
}

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

function date(day) {
  const today = new Date().getDate();
  return today - day;
}

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    for (let a = 0; a < x; a++) {
      matrix.push(i.toString() + a.toString());
    }
  }
  return matrix;
}

printVariables({
  ex1: area(randInt1, randInt2),
  ex2: crazySum(randInt1, randInt2),
  ex3: crazyDiff(randInt3),
  ex4: boundary(randInt4),
  ex5: strivify("school"),
  ex6: check3And7(randInt3),
  ex7: reverseString("Palindrome"),
  ex8: upperFirst("upper case me"),
  ex9: cutString("Hello"),
  ex10: giveMeRandom(randInt1),
  ex1Extra: checkArray(),
  ex2Extra: shoppingCartTotal(),
  ex3Extra: addToShoppingCart({
    price: 2,
    name: "blah6",
    id: 2,
    quantity: 5,
  }),
  ex4Extra: maxShoppingCart(),
  ex5Extra: latestShoppingCart(),
  ex7Extra: average([2, 4, 6, 8, "boo"]),
  ex8Extra: longest(["long", "longer", "longerest"]),
  ex9Extra: antiSpam("SCAM SPAM ALERT"),
  ex10Extra: date(5),
  ex11Extra: matrixGenerator(3, 2),
});

console.log("ex6Extra:", loopUntil(5));
