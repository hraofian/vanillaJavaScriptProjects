let amountInput = document.getElementById("am-input");
let tipInput = document.getElementById("tip-input");
let personInput = document.getElementById("person-input");
let calBtn = document.getElementById("calculateTips");
let totalResultSpan = document.getElementById("total-result");
let tipResultSpan = document.getElementById("tip-result");

//percentage butoon
let perBtn0 = document.getElementById("per-0");
let perBtn10 = document.getElementById("per-10");
let perBtn15 = document.getElementById("per-15");
let perBtn20 = document.getElementById("per-20");

perBtn0.addEventListener("click", () => {
  tipInput.value = "0";
  perBtn0.style.backgroundColor = "#023aa3";
  perBtn10.style.backgroundColor = "#0058fa";
  perBtn15.style.backgroundColor = "#0058fa";
  perBtn20.style.backgroundColor = "#0058fa";
});

perBtn10.addEventListener("click", () => {
  tipInput.value = "10";
  perBtn0.style.backgroundColor = "#0058fa";
  perBtn10.style.backgroundColor = "#023aa3";
  perBtn15.style.backgroundColor = "#0058fa";
  perBtn20.style.backgroundColor = "#0058fa";
});

perBtn15.addEventListener("click", () => {
  tipInput.value = "15";
  perBtn0.style.backgroundColor = "#0058fa";
  perBtn10.style.backgroundColor = "0058fa";
  perBtn15.style.backgroundColor = "#023aa3";
  perBtn20.style.backgroundColor = "#0058fa";
});

perBtn20.addEventListener("click", () => {
  tipInput.value = "20";
  perBtn0.style.backgroundColor = "#0058fa";
  perBtn10.style.backgroundColor = "#0058fa";
  perBtn15.style.backgroundColor = "#0058fa";
  perBtn20.style.backgroundColor = "#023aa3";
});

function claculate() {
  let amountValue = parseInt(amountInput.value);
  let tipValue = parseInt(tipInput.value);
  let personValue = parseInt(personInput.value);
  tipValue = tipValue * 0.01;
  let totalResult = amountValue * tipValue;
  totalResultSpan.innerHTML = `${totalResult} $`;
  tipResult = totalResult / personValue;
  tipResultSpan.innerHTML = `${tipResult} $`;
}

calBtn.addEventListener("click", () => {
  claculate();
});
