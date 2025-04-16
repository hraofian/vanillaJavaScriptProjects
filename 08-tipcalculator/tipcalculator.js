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

function perBtn0Click() {
  tipInput.value = "0";
  perBtn0.style.backgroundColor = "#023aa3";
  perBtn10.style.backgroundColor = "#0058fa";
  perBtn15.style.backgroundColor = "#0058fa";
  perBtn20.style.backgroundColor = "#0058fa";
}

function perBtn10Click() {
  tipInput.value = "10";
  perBtn0.style.backgroundColor = "#0058fa";
  perBtn10.style.backgroundColor = "#023aa3";
  perBtn15.style.backgroundColor = "#0058fa";
  perBtn20.style.backgroundColor = "#0058fa";
}

function perBtn15Click() {
  tipInput.value = "15";
  perBtn0.style.backgroundColor = "#0058fa";
  perBtn10.style.backgroundColor = "0058fa";
  perBtn15.style.backgroundColor = "#023aa3";
  perBtn20.style.backgroundColor = "#0058fa";
}

function perBtn20Click() {
  tipInput.value = "20";
  perBtn0.style.backgroundColor = "#0058fa";
  perBtn10.style.backgroundColor = "#0058fa";
  perBtn15.style.backgroundColor = "#0058fa";
  perBtn20.style.backgroundColor = "#023aa3";
}
function perBtnClickReset() {
  perBtn0.style.backgroundColor = "#0058fa";
  perBtn10.style.backgroundColor = "#0058fa";
  perBtn15.style.backgroundColor = "#0058fa";
  perBtn20.style.backgroundColor = "#0058fa";
}

perBtn0.addEventListener("click", () => {
  perBtn0Click();
});

perBtn10.addEventListener("click", () => {
  perBtn10Click();
});

perBtn15.addEventListener("click", () => {
  perBtn15Click();
});

perBtn20.addEventListener("click", () => {
  perBtn20Click();
});

tipInput.addEventListener("input", () => {
  if (tipInput.value === "0") {
    perBtn0Click();
  } else if (tipInput.value === "10") {
    perBtn10Click();
  } else if (tipInput.value === "15") {
    perBtn15Click();
  } else if (tipInput.value === "20") {
    perBtn20Click();
  } else {
    perBtnClickReset();
  }
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
