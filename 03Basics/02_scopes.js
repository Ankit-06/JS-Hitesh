//Curly braces are almost every time called scope except from object.

// var c = 300;
// if (true) {
//   let a = 10; //block scope
//   const b = 20; //block scope
//   var c = 30; //global scope
// //   c = 50;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 300;

// if (true) {
//   let a = 10;
//   console.log("inner a", a);
// }

// console.log("outer a", a);

//NOTE: Global scope is different in browser and node env.

function one() {
  const username = "Ankit";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

// one();

// if (true) {
//   const username = "Ankit";
//   if (username === "Ankit") {
//     const website = " google";
//     console.log(username + website);
//   }
//   //   console.log(website);
// }

// console.log(username);

// +++++++++++++++++ Interesting ++++++++++++++++++++++

// Function declaration
console.log(addone(5)); 
function addone(num) {
  return num + 1;
}

// Function expression
addTwo(5);
const addTwo = function (num) {
  return num + 2;
};


