//for button 1
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function decrement() {
  count = count - 1;
  countEl.innerText = count;
}

//for button 2
let countEl1 = document.getElementById("count-el1");

let count1 = 0;

function increment1() {
  count1 = count1 + 1;
  countEl1.innerText = count1;
}

function decrement1() {
  count1 = count1 - 1;
  countEl1.innerText = count1;
}

//for button 3
let countEl2 = document.getElementById("count-el2");

let count2 = 0;

function increment2() {
  count2 = count2 + 1;
  countEl2.innerText = count2;
}

function decrement2() {
  count2 = count2 - 1;
  countEl2.innerText = count2;
}
