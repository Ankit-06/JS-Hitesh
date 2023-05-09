const user = {
  username: "Ankit",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} Welcome to website`);
    console.log(this);
  },
};

// this - refers to the current context

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// In node environment this keyword refers to the empty object in global scope and has value inside function scope
// In browser.. this keyword referes to the window/ global object

// console.log(this);

// function chai() {
//   let username = "Ankit";

//   console.log(this.username); // only works in object, here it is undefined
// }

// chai();

// const chai = function () {
//   let username = "Ankit";

//   console.log(this.username); // only works in object, here it is undefined
// };

// chai();

// const chai = () => {
//   let username = "Ankit";
//   console.log(this); //empty inside arrow functions
//   console.log(this.username); //same as other functions
// };

// chai();

// Arrow Functions
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ({ userName: "Ankit" });

// console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 5, 0];

// myArray.forEach()
