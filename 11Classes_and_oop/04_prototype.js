// let myName = "Ankit     ";

// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Ankit = function () {
  console.log(`Ankit is present in all objects`);
};

// heroPower.Ankit();
// myHeros.Ankit();

Array.prototype.heyAnkit = function () {
  console.log(`Ankit says hello`);
};

// myHeros.heyAnkit();
// heroPower.heyAnkit(); //error because function is set to only Array prototype.

//Inheritance

const User = {
  userName: "Chai",
  email: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignments",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User; //outdated approch. User can be accessed now inside Teacher object(prototypal inheritance)

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); //(prototypal inheritance)

let anotherUserName = "chaiaurcode           ";
String.prototype.trueLength = function () {
  console.log(`${this}`); //jisne call kiya, wahi this hai (ex: ankit,iceTea)
  console.log(`true length is: ${this.trim().length}`);
};

anotherUserName.trueLength();
"ankit".trueLength();
"iceTea".trueLength();
