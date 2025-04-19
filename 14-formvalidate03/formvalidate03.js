let myInput = document.getElementById("number-input");
myInput.addEventListener("input", () => {
  if (myInput.value < 10) {
    alert("you must enter number larger than 10");
    myInput.value = 10;
  } else if (myInput.value > 20) {
    alert("you must enter number less than 20");
    myInput.value = 20;
  } else {
  }
});
