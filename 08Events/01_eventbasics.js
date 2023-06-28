// document.getElementById("owl").onclick = function () {
//   alert("Owl clicked");
// }; //not feasible approach

// attachEvent()
// jQuery - on

// Important event attributes:
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked inside ul");
//   },
//   false
// ); //third param is by default false.So no need to add it

// document.getElementById("owl").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation(); //stops event bubbling
//     console.log("Owl clicked");
//   },
//   false
// );

//event bubbling: propagation of event from bottom to top is called event bubbling. By default this is the behaviour. (third param false)
//event capturing: propagation of event from top to bottom is called event capturing. To use this behaviour pass third param as true

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     console.log("google clicked");
//     e.preventDefault(); //prevents default behaviour
//     e.stopPropagation(); //stops bubbling
//   },
//   false
// );

document.getElementById("images").addEventListener("click", function (e) {
  //   console.log(e.target.parentNode); //gives parent element of the target element
  //   console.log(e.target.tagName);

  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove(); //removes the element
  }

  //removeIt.parentNode.removeChild(removeIt);
});
