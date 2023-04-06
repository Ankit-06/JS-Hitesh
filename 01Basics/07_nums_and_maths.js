const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(3)); //priority given to numbers before decimal

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++
// console.log(Math.abs(-23));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.min(1,2,4,23,54,5,6,7));
// console.log(Math.max(1,2,4,23,54,5,6,7));

console.log(Math.floor(Math.random() * 10) + 1);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
