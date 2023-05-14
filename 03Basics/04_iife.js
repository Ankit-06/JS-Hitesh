// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to avoide variables pollution from the global scope

(function chai() {
  //Named IIFE
  console.log(`DB Connected`);
})();

// use ; after a IIFE else it will not know when to stop the execution and will give error, if another IIFE is written

((name) => {
  //Anonymous IIFE
  console.log(`Arrow function IIFE ${name}`);
})("Ankit");
