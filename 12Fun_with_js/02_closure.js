// Lexical scoping
// function outer() {
//   let username = "Ankit";

//   function inner() {
//     let secret = "mysec123";
//     console.log("inner ", username);
//   }

//   function innerTwo() {
//     // console.log(secret);
//     console.log("innerTwo: ", username);
//   }

//   inner();
//   innerTwo();
// }
// outer();
// console.log(username);

/*******************************************************/
//Closure
// function makeFun() {
//   const name = "Ankit";
//   function displayName() {
//     console.log(name);
//   }

//   return displayName;
// }

// const myFun = makeFun();
// myFun();

/*******************************************************/
//Closure practical implementation
// document.getElementById("orange").onclick = function () {
//   document.body.style.backgroundColor = "Orange";
// };

// document.getElementById("green").onclick = function () {
//   document.body.style.backgroundColor = "green";
// };

//issue without closure
// function clickHandler(color) {
//   document.body.style.backgroundColor = `${color}`;
// }

// document.getElementById("orange").onclick = clickHandler("orange"); //without even clicking, color is changing

//solving above problem
function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.getElementById("orange").onclick = clickHandler("orange");
