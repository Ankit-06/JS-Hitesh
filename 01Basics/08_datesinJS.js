// Dates

let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// let myCustomDate = new Date(2023, 2, 30);
// let myCustomDate = new Date(2023, 2, 30, 5, 3);
let myCustomDate = new Date("01-23-2023");

// console.log(myCustomDate.toDateString());
// console.log(myCustomDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); // ms from 1st jan 1970
// console.log(myCustomDate.getTime()); //ms for the custom date
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleDateString("default", {
  weekday: "long",
});

console.log(newDate.toLocaleDateString());
