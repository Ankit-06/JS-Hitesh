// if, elseif, else condition

// if (true) console.log("test"), console.log("test2"); never write like this

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged In");
}
