// const tinderUser = new Object(); //singleton object
const tinderUser = {}; //non-singleton

tinderUser.id = "123abc";
tinderUser.name = "Ankit";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "ankit@gmail.com",
  userName: {
    fullName: {
      firstName: { name: "Ankit" },
      lastName: {},
    },
  },
};

// console.log(regularUser.userName.fullName.firstName.name);
// console.log(regularUser.userName.fullName.lastName?.name?.k);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
// const obj3 = { obj1, obj2 };

const obj3 = Object.assign({}, obj1, obj2);
const obj = { ...obj1, ...obj2 }; // using spread operator

// console.log(obj3);
// console.log(obj);
// console.log(obj3 === obj);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "Js in hindi",
  price: "999",
  courseInstructor: "Ankit",
};

// course.courseInstructor

// destructuring
// const { courseInstructor } = course;
// console.log(courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);
f