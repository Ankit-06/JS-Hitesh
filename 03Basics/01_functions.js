function sayMyName() {
  console.log("A");
  console.log("N");
  console.log("K");
  console.log("I");
  console.log("T");
}

// sayMyName();

function sum(num1, num2) {
  return num1 + num2;
}

// console.log(sum());
// console.log(sum(5, "a"));
// console.log(sum(5, null));

const result = sum(5, 3);
// console.log(result);

function loginUserMessage(userName) {
  return `${userName} just logged in`;
}

// console.log(loginUserMessage("Ankit"));
// console.log(loginUserMessage());

// function calculateCartPrice(...num1) { //REST operator
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2300, 5403));

const user = {
  userName: "Ankit",
  price: 1234,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  userName: "Testing",
  price: 230,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
