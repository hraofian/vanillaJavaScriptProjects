// crate close button add add button to li
let myLi = document.getElementsByTagName("LI");
let myUl = document.getElementsByTagName("ul")[0];

for (let i = 0; i < myLi.length; i++) {
  let closeSpan = document.createElement("SPAN");
  let closeText = document.createTextNode("\u2715");
  closeSpan.appendChild(closeText);
  closeSpan.className = "close";
  myLi[i].appendChild(closeSpan);
  // console.log(myLi[i])
}

// hidden li by clicking on close button
let closeButton = document.getElementsByClassName("close");
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener("click", () => {
    closeButton[i].parentElement.style.display = "none";
  });
}

//add new task

let addInput = document.getElementById("addInput");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
  if (addInput.value !== "") {
    let inputValue = addInput.value;
    let inputValueTextNode = document.createTextNode(inputValue);
    let newLi = document.createElement("li");
    newLi.appendChild(inputValueTextNode);
    myUl.appendChild(newLi);

    let closeSpan = document.createElement("SPAN");
    let closeText = document.createTextNode("\u2715");
    closeSpan.appendChild(closeText);
    closeSpan.className = "close";
    newLi.appendChild(closeSpan);

    closeSpan.addEventListener("click", () => {
      newLi.style.display = "none";
    });

    addInput.value = "";
  } else {
    return;
  }
});
