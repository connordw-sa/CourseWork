import { printVariables } from "./lib/CTools.js";
// Homework:
// a variable for your name, last name, middle name
// a variable that will sum the first two variables into your full name
// print on the console: hello, my name is [NAME HERE].

let myName = "Connor";
let midName = "D.";
let surName = "W.";
const ex1 = `Hello, my name is ${myName} ${midName} ${surName}`;

// Save your age, current year to a variable
// print your birth year on the terminal, saving it to a variable.
// BONUS: try to run the code in the browser as well.

let currentYear = 2023;
let myAge = 27;
const ex2 = currentYear - myAge;

// Homework [EXTRA]
// You’re going to create a variable for each step of the recipe, and you’re naming it with a meaningful name representing the recipient used or the step itself.
// In each variable you’re going to sum the quantities of the ingredients used.
// In the end you should have a variable containing the sum of all the ingredients in a variable called “carbonara”
// display the value of carbonara in a console.log()

// Spaghetti alla Carbonara Recipe:
// Ingredients for 4 persons:
//          spaghetti 400g,
//          guanciale 250g,
//          very fresh egg yolks 6,
//          aged grated Pecorino Romano cheese 50g,
//          raw black pepper 4g
// To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips.
// Combine the egg yolks with the finely grated Pecorino Romano.
// Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest.
// Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.
// Cook the pasta with a pinch of salt in the water (guanciale is already very salty);
// set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.
// Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:
// this will create a creamy sauce with the pasta starch contained in that water.
// TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.
// Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.
// It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.
// Add the remaining roasted black pepper and serve immediately.

let spaghettiTotal = 400;
let guancialeTotal = 250;
let eggsTotal = 6;
let pecorinoCheeseTotal = 50;
let blackPepperTotal = 2;
let eggCheese = eggsTotal + pecorinoCheeseTotal;
let pepperEggCheese = blackPepperTotal + eggCheese;
let cookedGuanciale = guancialeTotal / 1.5;
let cookedSpagh = spaghettiTotal * 1.5;
const ex3 = (
  cookedSpagh +
  cookedGuanciale +
  pepperEggCheese +
  blackPepperTotal
).toFixed(2);

printVariables({ ex1, ex2, ex3 });
