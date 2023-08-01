const User = {
  _email: "a@gmail.com",
  _password: "asdmkc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

console.log(User.email);


const tea = Object.create()