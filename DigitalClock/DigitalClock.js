function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  setTimeout(startTime, 1000);
  document.getElementById("timer").innerText = `${h}:${m}:${s}`;
}

function checkTime(i) {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
}

startTime()


