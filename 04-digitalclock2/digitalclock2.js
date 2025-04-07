let timerValue = document.getElementById("timer-value").innerHTML;
let dateValue = document.getElementById("date-value").innerHTML;
function timer() {
  let date = new Date();
  let timeH = date.getHours();
  let timeM = date.getMinutes();
  let timeS = date.getSeconds();
  let dateY = date.getFullYear();
  let dateM = date.getMonth() + 1;
  let dateD = date.getDate();
  if (timeH < 10) {
    timeH = `0${timeH}`;
  }
  if (timeM < 10) {
    timeM = `0${timeM}`;
  }
  if (timeS < 10) {
    timeS = `0${timeS}`;
  }
  timerValue = `${timeH} : ${timeM} : ${timeS}`;
  document.getElementById("timer-value").innerText = timerValue;
  if (dateM < 10) {
    dateM = `0${dateM}`;
  }
  if (dateD < 10) {
    dateD = `0${dateD}`;
  }
  dateValue = `${dateY} / ${dateM} / ${dateD}`;
  document.getElementById("date-value").innerText = dateValue;
}

function timerClock() {
  setInterval(timer, 1000);
}


timer();
timerClock();
