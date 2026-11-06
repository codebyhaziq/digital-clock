const buttonEl = document.querySelector("#formatToggle");
const dateEl = document.querySelector("#date");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const ampm = document.querySelector("#ampm");
const timeDisplay = document.querySelector("#time-display");
let hours, minutes, seconds;
const getTime = () => {
  const now = new Date();
  hours = String(now.getHours()).padStart(2, "0");
  minutes = String(now.getMinutes()).padStart(2, "0");
  seconds = String(now.getSeconds()).padStart(2, "0");
};
const render = () => {
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
};
setInterval(() => {
  getTime();
  render();
}, 1000);
