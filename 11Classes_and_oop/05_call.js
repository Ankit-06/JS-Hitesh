function SetUserName(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //SetUserName(username); //ye function call toh hua lekin execution khtm hone k baad callstack se iska EC bhi remove ho jata hai aur isi k sath iske andar declared sbhi variabled bhi remove ho jaate hai.

  SetUserName.call(this, username); //call method use krte hai taki uska reference hold kr sake mtlb ki uske andar wale variables aur functions ka context hold rakhna hai even after the EC gets removed from the call stack.
  //this is passed as the 1st parameter inside the call method to give the current context to another function.
  //now the setUserName function will not use their own this, instead will use the this of createUser funciton and now the username value will be accessible in createUser function as well.
  this.email = email;
  this.password = password;
}

const chai = new createUser("Chai", "chai@gmail.com", "123");

console.log(chai); //only properties which are set i createUser function are being displayed if call method is not used
