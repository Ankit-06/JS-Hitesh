// setTimeout, clearTimeout

// const sayAnkit = function () {
//   console.log("Ankit");
// };

// setTimeout(sayAnkit, 2000);

const changeText = function () {
  document.querySelector("h1").innerHTML = "Best JS series";
};

const changeMe = setTimeout(changeText, 2000);

document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("STOPPED");
});
