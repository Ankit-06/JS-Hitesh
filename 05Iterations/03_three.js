// for of

// ["", "", ""];
// [{}, {}, {}];

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const str = "Hello World!";

// for (const s of str) {
//   if (s == " ") {
//     continue;
//   }
//   console.log(s);
// }

// MAPS -an object which holds key-value pair. Remember the order of insertion unlike objects. Duplicates are not stored.

const map = new Map();
map.set("IN", "India");
map.set("IN", "India");
map.set("USA", "America");
map.set("FR", "France");

// console.log(map);

// for (const key of map) {
//   console.log(key);
// }

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// Doesn't work for objects
// for (const key of myObject) {
//   console.log(key);
// }
