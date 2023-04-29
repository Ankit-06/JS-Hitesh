// singleton

// object literals
const mySym = Symbol("key1"); //declaring a symbol

const JsUser = {
  name: "Ankit",
  "full name": "Ankit Mishra",
  [mySym]: "myKey1", //using symbol as a key
  age: 18,
  location: "Delhi",
  email: "ankit@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.full name); //can't access with a dot(.)
// console.log(JsUser[mySym]); //symbols can be accessed only with []

JsUser.email = "ankit@gmail.com";
// Object.freeze(JsUser); //cannot change any value in object after this
JsUser.email = "ankit@google.com"; //no error, but values will not be updated.
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js user, ${this.name}`);
};

// console.log(JsUser.greeting); //function reference
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);
