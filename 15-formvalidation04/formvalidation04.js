function validation() {
  let myInput = document.getElementById("my-input");
  let text = "";
  if ((myInput.value < 1) | (myInput.value > 10)) {
    text = "your enter value is wrong!";
  } else {
    text = "your enter value is corect!";
  }
  document.getElementById("message").innerHTML = text;
}
