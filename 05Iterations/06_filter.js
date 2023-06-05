const coding = ["js", "ruby", "java", "python", "scala"];

// forEach do not returns even if explicitly return is added.

// const values = coding.forEach((item) => {
// //   console.log(item);
//   return item;
// });

// console.log(values);

// filter method
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const values = myNums.filter((num) => num > 4);
// console.log(values);

const books = [
  { title: "Book 1", genre: "Non-Fiction", publish: 1981, edition: 1989 },
  { title: "Book 2", genre: "Science", publish: 1951, edition: 1959 },
  { title: "Book 3", genre: "Non-Fiction", publish: 2011, edition: 2018 },
  { title: "Book 4", genre: "History", publish: 2000, edition: 2020 },
  { title: "Book 5", genre: "History", publish: 2001, edition: 2005 },
  { title: "Book 6", genre: "Science", publish: 1981, edition: 1999 },
  { title: "Book 7", genre: "Non-Fiction", publish: 1960, edition: 1982 },
  { title: "Book 8", genre: "History", publish: 1953, edition: 1993 },
  { title: "Book 9", genre: "Science", publish: 2000, edition: 2023 },
];

// const userBooks = books.filter((book) => book.genre === "History");

// const userBooks = books.filter((book) => {
//   return book.publish >= 2000;
// });

// const userBooks = books.filter((book) => {
//   return book.publish >= 2000 && book.genre === "History";
// });

// console.log(userBooks);
