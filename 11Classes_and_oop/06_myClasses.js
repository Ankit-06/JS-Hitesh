//introduce in ES6

class User {
  //constructor is called when new keyword used
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("Chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//Behind the scene

function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User2.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const code = new User("code", "chai@gmail.com", "123");

console.log(code.encryptPassword());
console.log(code.changeUserName());
