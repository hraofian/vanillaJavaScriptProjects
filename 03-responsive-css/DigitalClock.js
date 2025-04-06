let counterTag = document.getElementById("counter");
let counterValue = Number(document.getElementById("counter").innerText);

changeColor();

function setCounter(counter) {
  document.getElementById("counter").innerText = counter;
  changeColor();
}

document.getElementById("increase").addEventListener("click", () => {
  counterValue += 1;
  setCounter(counterValue);
});

document.getElementById("decrease").addEventListener("click", () => {
  counterValue -= 1;
  setCounter(counterValue);
});

document.getElementById("reset").addEventListener("click", () => {
  counterValue = 0;
  setCounter(counterValue);
});

function changeColor() {
  if (counterValue > 0) {
    counterTag.setAttribute("class", "green");
  } else if (counterValue < 0) {
    counterTag.setAttribute("class", "red");
  } else {
    counterTag.setAttribute("class", "yellow");
  }
}
