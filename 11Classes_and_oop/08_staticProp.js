class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username} `);
  }

  //to stop using this method from the instance of(objects) User class
  static createId() {
    return `123`;
  }
}

const ankit = new User("Ankit");
console.log(ankit.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("Iphone", "i@phone.com");
console.log(iphone.createId()); //not accessible in child class also
