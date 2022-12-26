const accountId = 14453;
let accountEmail = "ankitkumar81458@gmail.com";
var accountPassword = '12345';
accountCity = "Delhi"; // never use this way to create variable
let accountState;

// accountId = 2; // reinitializaition not allowed

accountEmail = 'testmail@gmail.com';
accountPassword = '54321';
accountCity = 'Jaipur';

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); // prints in tabular form

/*
This is scope.
JS didn't know about it earlier.
Therefore let was introduced instead of var.
prefer not to use var
because of issues in block scope and functional scope
*/