let flipBtn = document.getElementById("flip-btn");
let colorBox = document.getElementById("color-box");
let colorCode = document.getElementById("color-code")


function getRandomColor() {
  let letters = "0123456789ABCDE";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}


function flipColor(){
    let randomColor = ""
    randomColor = getRandomColor()
    colorBox.style.backgroundColor = `${randomColor}`
    colorCode.innerText = randomColor
}

flipBtn.addEventListener("click", () => {
    flipColor();
});

