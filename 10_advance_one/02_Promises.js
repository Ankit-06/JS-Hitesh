/*
Promise: The promise object represents the eventual completion(or failure) of an async operation and its resulting value.

Promises have either of the 3 states:
1)pending :initial state
2)fulfilled: operation completed successfully
3)rejected: operations failed
*/

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography ,network
  setTimeout(function () {
    console.log("Async task is completed now");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed::");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ankit", email: "ankit@gmail.com" });
  }, 200);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Ankit", password: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 2000);
});

const userName = promiseFour
  .then((user) => {
    console.log(user);
    return user?.username;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// console.log(userName);

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: 123 });
    }
    reject("ERROR:JS went wrong");
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    //to handle errors when using async await use try catch block
    console.log(err);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error  ", err));
