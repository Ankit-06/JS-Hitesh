# Projects relared to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing from default action
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  console.log(height);
  console.log(isNaN(height));
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3

```javascript
const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();

  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}
const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else {
    displayMessage(`Number is too high`);
  }
};

const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;

  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
};
```

## Project 5

```javascript
const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>`;
});
```

### Project 6

```javascript
//generate a random color

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * 16));
  }
  return color;
};

let intervalId;

const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null; //dereferencing the value to free memory, (clean code practice)
  console.log("STOPPED");
};

document.querySelector("#start").addEventListener("click", () => {
  startChangingColor();
});

document.querySelector("#stop").addEventListener("click", () => {
  stopChangingColor();
});
```
