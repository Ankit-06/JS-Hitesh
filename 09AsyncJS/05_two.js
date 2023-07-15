// setInterval, clearInterval

const sayDate = function (str) {
  console.log(str, Date.now());
};
let intervalId;

document.querySelector("#start").addEventListener("click", () => {
  intervalId = setInterval(sayDate, 1000, "Ankit"); //3rd argument in setInterval works as parameter for callback function
  console.log("STARTED");
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  console.log("STOPPED");
});
