// crate close button add add    button to li
let myLi = document.getElementsByTagName("LI");

for (let i = 0; i < myLi.length; i++) {
  let closeSpan = document.createElement("SPAN");
  let closeText = document.createTextNode("x");
  closeSpan.appendChild(closeText);
  closeSpan.className = "close";
  myLi[i].appendChild(closeSpan);
  // console.log(myLi[i])
}

// hidden li by clicking on close button
let closeButton = document.getElementsByClassName("close");
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = function () {
    let parentLi = this.parentElement;
    parentLi.style.display = "none"
    console.log("hidden")
  };
}
