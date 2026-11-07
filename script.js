const buttonEl = document.querySelector("#formatToggle");
const dateEl = document.querySelector("#date");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const ampm = document.querySelector("#ampm");
const timeDisplay = document.querySelector("#time-display");
const dateDisplay = document.querySelector("#date");
const months = [
  "January",
  " February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let hours, minutes, seconds, year, month, day;
const getTime = () => {
  const now = new Date();
  hours = String(now.getHours()).padStart(2, "0");
  minutes = String(now.getMinutes()).padStart(2, "0");
  seconds = String(now.getSeconds()).padStart(2, "0");
  year = now.getFullYear();
  month = now.getMonth();
  day = now.getDay();
};

const render = () => {
  dateDisplay.textContent = `${days[day]} , ${months[month]} , ${year}`
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
};
getTime();
render();
setInterval(() => {
  getTime();
  render();
}, 1000);
