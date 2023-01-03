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

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ankit" => true
// undefined => false
// null => false
