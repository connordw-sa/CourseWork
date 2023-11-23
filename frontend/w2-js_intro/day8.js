import { printVariables, rng } from "../lib/CTools.js";
/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const numArray = [1, 2, 3, 4, 5];
const ex1 = numArray;

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const myDetails = {
  name: "Connor",
  surname: "W.",
  email: "@gmail",
  age: "27",
};
const ex2 = myDetails;

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

const ex3 = (myDetails.hasDrivers = true);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

const ex4 = delete myDetails.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const secondObj = { ...myDetails, email: "@yahoo" };
const ex5 = myDetails.email == secondObj.email;

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart
  you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more 
 than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = rng(100);
const ex6 = [
  totalShoppingCart,
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10,
];

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let priceToDiscount = ex6[1];
const ex7 = [priceToDiscount, priceToDiscount * 0.8];

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let carArr = [
  {
    brand: "cheap",
    model: "bad",
    licPlate: 0,
  },
];
for (let i = 0; i < 5; i++) {
  let cloneCar = { ...carArr[0], licPlate: [i + 1] };
  carArr.push(cloneCar);
}
const ex8 = carArr;

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = ex8;
const ex9 = carsForRent;

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();
const ex10 = carsForRent;

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

// typeof will return object for licPlate not number because of - (i + 1)
// idk why it returns number if using rng()
// it returns number for first car created but above its been shift()

const myCar = carArr[0];
const ex11 = [typeof myCar.brand, typeof myCar.model, typeof myCar.licPlate];

/* EXERCISE 12
 Create a new variable called carsForSale
  assigning to it an empty array, and then
   insert 3 cars into it.
 Create a new variable called totalCars and 
 assign to it the total number of cars present
  in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
for (let i = 0; i < 3; i++) {
  let car = { ...carArr[0], licPlate: i + 10 };
  carsForSale.push(car);
}
const ex12 = carsForRent.length + carsForSale.length;

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

function returnCars() {
  for (let i = 0; i < carsForSale.length; i++) {
    return carsForSale;
  }
}
const ex13 = returnCars();

// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

const ex1Extra = numArray.sort(function (a, b) {
  return b - a;
});

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

const ex2Extra = Math.max(...numArray);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

const ex3Extra = Math.min(...numArray);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

const ex4Extra = numArray.filter((num) => num % 2 == 0);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

const ex5Extra = numArray.filter((num) => num % 2 != 0);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

const ex6Extra = "swgkwegglgwddmgkiiioooo"
  .split("")
  .filter((letter) => !"aeiou".includes(letter))
  .join("");

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

const ex7Extra = [-5, -1, 0].map((num) => (num += 1));

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

const ex8Extra = ["strive", "is", "great"].map((word) => word.length);

printVariables({
  ex1,
  ex2,
  ex3,
  ex4,
  ex5,
  ex6,
  ex7,
  ex8,
  ex9,
  ex10,
  ex11,
  ex12,
  ex13,
  ex1Extra,
  ex2Extra,
  ex3Extra,
  ex4Extra,
  ex5Extra,
  ex6Extra,
  ex7Extra,
  ex8Extra,
});
