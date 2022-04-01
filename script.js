let minutes = 0;
let seconds = 0;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let interval;

const startTimer = () => {
  seconds++;

  if (seconds < 10) {
    appendSeconds.innerHTML = "0" + seconds;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + seconds;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
};

startBtn.addEventListener("click", () => {
  interval = setInterval(startTimer, 1000);
  startBtn.setAttribute("disabled", "");
  pauseBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  startBtn.removeAttribute("disabled")
  pauseBtn.setAttribute("disabled", "")
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  startBtn.removeAttribute("disabled")
  pauseBtn.setAttribute("disabled", "")
  resetBtn.setAttribute("disabled", "")
  seconds = "00";
  minutes = "00";
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
});
