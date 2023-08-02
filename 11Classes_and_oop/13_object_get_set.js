const User = {
  _email: "a@gmail.com",
  _password: "asdmkc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
  get password() {
    return this._password.toUpperCase();
  },

  set password(value) {
    this._password = value;
  },
};

console.log(User.email);

const tea = Object.create(User); //factory function
console.log(tea.password);
