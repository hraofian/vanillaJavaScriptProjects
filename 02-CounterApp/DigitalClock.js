let counter = Number(document.getElementById("counter").innerText);

document.getElementById("increase").addEventListener("click", () => {
  counter += 1;
  document.getElementById("counter").innerText = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
  counter -= 1;
  document.getElementById("counter").innerText = counter;
});

document.getElementById("reset").addEventListener("click", () => {
  counter = 0;
  document.getElementById("counter").innerText = counter;
});

if(counter>1){
document.getElementById("counter").style.color = "red"
}
