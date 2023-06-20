# Projects relared to DOM

## project link

[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //preventing from default action
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  console.log(height);
  console.log(isNaN(height));
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
