// Object literal: collection of methods and proeprties
const user = {
  username: "Ankit",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from DB");
  },
};
user.getUserDetails();
