const name = "Ankit";
const repoCount = 10;

// console.log(name + repoCount + " Value");

//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Ankit-AM");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0, 4);
console.log(newStr);

const anotherString = gameName.slice(-7, 4);
console.log(anotherString);

const newStringOne = "           Ankit      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ankit.com/ankit%20mishra";
console.log(url.replace("%20", "-"));
console.log(url.includes("ankit"));
console.log(gameName.split("-"));
console.log(url.split("/"));
