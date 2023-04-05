// let score = "33sas"; // converts into NaN and typeof is number
// let score = null; // converts into 0 and typeof is number
// let score = undefined; // converts into NaN and typeof is number
// let score = false; // converts into 0/1 and typeof is number
let score = "Ankit"; // converts into NaN and typeof is number

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);

/*
NOTE:
    '33' => 33
    '33abc' => NaN
    true => 1; false=>0 
*/

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ankit" => true
// undefined => false
// null => false

//****************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(value);
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Ankit";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log(1 + "2" + 2); //122
// console.log(3 + ((4 * 5) % 3));

// console.log(+true); //1
// console.log(+""); //0

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1); //4
// console.log(num2); //4
// console.log(num3); //4

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);