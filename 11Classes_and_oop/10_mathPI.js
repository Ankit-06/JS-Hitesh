// console.log(Math.PI);

Math.PI = 5; //can't update this value

// console.log(Math.PI);

// shows some hidden properties
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log(`Code fatt gya`);
  },
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// iterating object
// for (let [key, value] of Object.entries(chai)) {
//   if (typeof value !== "function") {
//     console.log(`${key}:${value}`);
//   }
// }

// defining our own properties
Object.defineProperty(chai, "name", {
  writable: false, //can't override the value of name
  enumerable: false, //can't iterate the value of name
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// name is not coming because of enumerable false
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
