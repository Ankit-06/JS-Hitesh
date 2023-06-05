const coding = ["js", "ruby", "java", "python", "scala"];

// coding.forEach(function (item, index) {
//   console.log(item, index);
// });

// coding.forEach((item) => console.log(item));

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => console.log(item, index, arr));

const myCoding = [
  {
    langName: "Javascript",
    langFileName: "js",
  },
  {
    langName: "Java",
    langFileName: "java",
  },
  {
    langName: "Python",
    langFileName: "py",
  },
];

// myCoding.forEach((item) => {
//   console.log(item.langFileName, item.langName);
// });

myCoding.forEach(({ langFileName, langName }) => {
  console.log(langFileName, langName);
});
