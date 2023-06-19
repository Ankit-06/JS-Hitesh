document.getElementById("title");
document.getElementById("title").id;
document.getElementById("title").className;

document.getElementById("title").getAttribute("id");
document.getElementById("title").getAttribute("class");

document.getElementById("title").setAttribute("class", "custom-class"); //overrides the class name
document.getElementById("title").setAttribute("class", "custom-class heading"); //to add multiple classes use this

document.getElementById("title").style = "backgroundColor:red"; //add styles
document.getElementById("title").style.backgroundColor = "red"; //add styles

document.getElementById("title").textContent; //shows hidden text also
document.getElementById("title").innerText; //only shows what is visible in DOM
document.getElementById("title").innerHTML; //gives inner html of the element

document.querySelector("h2");
document.querySelector(".heading");
document.querySelector("#title");

const myul = document.querySelector("ul");
myul.querySelector("li");

document.querySelectorAll("li"); //returns a nodeList, it is not an array but forEach can be used

document.getElementsByClassName("listElement"); //returns a HTMLCollections, forEach can't be used

const tempList = document.getElementsByClassName("listElement");
Array.from(tempList); //converts to array
