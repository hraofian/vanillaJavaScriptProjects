let deleteIcon = document.querySelectorAll(".delete-icon");

// console.log(deleteIcon.length);

// deleteIcon[0].addEventListener("click",(e)=>{console.log(e.target)})

for (i = 0; i < deleteIcon.length; i++) {
  deleteIcon[i].addEventListener("click", (e) => {
    console.log(e.target.parentElement.parentElement.remove());
  });
}
