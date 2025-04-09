let addBox = document.getElementById("add-box");
let addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  //create p tag
  let boxValue = addBox.value;
  let newP = document.createElement("p");
  boxValue = document.createTextNode(boxValue);
  newP.appendChild(boxValue);
  //
  //create i tag by check class
  let newICheck = document.createElement("i");
  newICheck.classList.add("bi", "bi-check");
  let newSpanCheck = document.createElement("span");
  newSpanCheck.classList.add("check-icon");
  newSpanCheck.appendChild(newICheck);

  //create i tag by edith class
  let newIEdith = document.createElement("i");
  newIEdith.classList.add("bi", "bi-pen");
  let newSpanEdith = document.createElement("span");
  newSpanEdith.classList.add("edith-icon");
  newSpanEdith.appendChild(newIEdith);
  // console.log(newSpanEdith);
  //
  //create i tag by delete class
  let newIDelete = document.createElement("i");
  newIDelete.setAttribute("id", "delete-icon");
  newIDelete.classList.add("bi", "bi-trash");
  let newSpanDelete = document.createElement("span");
  newSpanDelete.classList.add("delete-icon");
  newSpanDelete.appendChild(newIDelete);
  // console.log(newSpanDelete);
  //
  //creat li tag
  let newLi = document.createElement("li");
  newLi.appendChild(newP);
  newLi.appendChild(newSpanCheck);
  newLi.appendChild(newSpanEdith);
  newLi.appendChild(newSpanDelete);
  // console.log(newLi);
  //
  //add li to ul
  let myUl = document.querySelector("ul");
  myUl.appendChild(newLi);
  // console.log(myUl)
  let deleteIcon = document.querySelectorAll(".delete-icon");
  console.log(deleteIcon);

  for (i = 0; i < deleteIcon.length; i++) {
    deleteIcon[i].addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  }
  
    addBox.value =""
    
});

let deleteIcon = document.querySelectorAll("#delete-icon");

for (i = 0; i < deleteIcon.length; i++) {
  deleteIcon[i].addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
  });
}


