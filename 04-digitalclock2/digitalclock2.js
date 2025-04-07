let date = new Date();
let timeH = date.getHours();
let timeM = date.getMinutes();
let timeS = date.getSeconds();
let dateY = date.getFullYear();
let dateM = date.getMonth();
let dateD = date.getDay();

let timerValue = document.getElementById("timer-value").innerHTML;

function timer() {
  timerValue = `${timeH} : ${timeM} : ${timeS}`;
}

timer()