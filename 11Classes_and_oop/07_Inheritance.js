class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //refers to the class which is extended and calls the constructor
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "chai@teacher.com", 123);
chai.addCourse();
chai.logMe(); //inheriting method of parent class

const tea = new User("Tea", "tea@gmail.com", 987);
tea.logMe();

// console.log(chai === tea); //false
// console.log(chai === Teacher); //false
// console.log(chai instanceof Teacher); //true
// console.log(chai instanceof User); //true
