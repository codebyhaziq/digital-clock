const buttonEl = document.querySelector("#formatToggle");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const dateEl = document.querySelector("#date");
const ampmEl = document.querySelector("#ampm");
const timeDisplay = document.querySelector(".time-display");

const months = [
  "January",
  "February",
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
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let year, day, month, date, hours, minutes, seconds;

const getTime = () => {
  const now = new Date();
  now.setHours(0);
  day = days[now.getDay()];
  month = months[now.getMonth()];
  date = now.getDate();
  year = now.getFullYear();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  let ampm;
  if (hours >= 12) {
    ampm = "P.M";
    ampmEl.textContent = ampm;
  } else {
    ampm = "A.M";
    ampmEl.textContent = ampm;
  }
  hours = hours % 12 || 12;
  hours = String(hours);
  minutes = String(minutes);
  seconds = String(seconds);
  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");
  seconds = seconds.padStart(2, "0");
};
const render = () => {
  dateEl.textContent = `${day}, ${month} ${date}, ${year}`;
  hoursEl.textContent = hours;
  secondsEl.textContent = seconds;
  minutesEl.textContent = minutes;
};
getTime();
render();
setInterval(() => {
  getTime();
  render();
}, 1000);
