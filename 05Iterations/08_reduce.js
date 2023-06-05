// Reduce method

const myNums = [1, 2, 3, 4];

// const values = myNums.reduce(function (acc, curr) {
//   console.log(`acc: ${acc} and curr: ${curr}`);
//   return acc * curr;
// }, 3);
// console.log(values);

// const totalValue = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(totalValue);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 1999,
  },
  {
    itemName: "java course",
    price: 4999,
  },
  {
    itemName: "DSA course",
    price: 999,
  },
];

const totalCost = shoppingCart.reduce((acc, item) => item.price + acc, 0);

console.log(totalCost);
