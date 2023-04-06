// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Javascript is a dynamically typed language. We never tell JS, what type data is to be stored in a variable.
const score = 100;
const scoreValue = 100.04;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id);
console.log(anotherId);
console.log(id == anotherId); //false

const bigNumber = 12345678564354231245675n; //n automatically makes it bigInt

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Ankit",
  age: 23,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof bigNumber); //undefined earlier now it is bigint
console.log(typeof outsideTemp); //object
console.log(typeof myFunction); //function
console.log(typeof id); //symbol
