class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const ankit = new User("ankit@gmail.com", "abc");
console.log(ankit.password);
console.log(ankit.email);

/*
get and set methods are injected automatically whenever classes are used, these are called getters and setters.
We need to use these methods together always. only 1 can't be used alone.
while setting or getting the properties use _ property to access the properties inside get & set.
method name would be same as property name
*/
