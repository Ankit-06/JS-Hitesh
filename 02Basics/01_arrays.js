// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

//Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(10);
// myArr.shift();

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(19));

// const newArr = myArr.join()
// console.log(typeof newArr);
// console.log(typeof myArr);

// slice,splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 5);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(3, 2);
console.log(myn2);
console.log("C ", myArr);
