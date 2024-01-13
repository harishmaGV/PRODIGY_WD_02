const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
let targetTime = 60; // Set initial countdown time in seconds
let intervalId = null;
function startTimer() {
  intervalId = setInterval(() => {
    targetTime--;
    if (targetTime < 0) {
      clearInterval(intervalId);
      alert("Time is up!");
    } else {
      updateTimerDisplay();
    }
  }, 1000); // Update timer every second
}

function updateTimerDisplay() {
  const minutes = Math.floor(targetTime / 60);
  const seconds = targetTime % 60;
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  targetTime = 60;
  updateTimerDisplay();
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", startTimer);

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopTimer);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetTimer);