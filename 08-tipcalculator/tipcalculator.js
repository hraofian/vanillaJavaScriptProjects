let amountInput = document.getElementById("am-input");
let tipInput = document.getElementById("tip-input");
let personInput = document.getElementById("person-input");
let calBtn = document.getElementById("calculateTips");
let totalResultSpan = document.getElementById("total-result");
let tipResultSpan = document.getElementById("tip-result");

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
