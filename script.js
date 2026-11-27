const buttonEl = document.querySelector("#formatToggle");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const dateEl = document.querySelector("#date");
const ampmEl = document.querySelector("#ampm");
const timeDisplay = document.querySelector(".time-display");
let ampm;
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
let is24Hour = false;
let displayHour, minute, second, currentHour, date, month, day, year;
const getTime = () => {
  const now = new Date();
  minute = now.getMinutes();
  second = now.getSeconds();
  currentHour = now.getHours();
  date = now.getDate();
  month = months[now.getMonth()];
  day = days[now.getDay()];
  year = now.getFullYear();
  console.log(currentHour);
  if (is24Hour) {
    displayHour = currentHour;
  } else {
    displayHour = currentHour % 12;
  }

  if (is24Hour) {
    ampm = "";
  } else {
    if (currentHour >= 12) {
      ampm = "P.M";
    } else {
      ampm = "A.M";
    }
  }
};
const render = () => {
  ampmEl.textContent = ampm;
  hoursEl.textContent = String(displayHour).padStart(2, "0");
  minutesEl.textContent = String(minute).padStart(2, "0");
  secondsEl.textContent = String(second).padStart(2, "0");
  dateEl.textContent = `${day}, ${month} ${date}, ${year}`;
};
getTime();
render();
setInterval(() => {
  getTime();
  render();
}, 1000);

buttonEl.addEventListener("click", () => {
  is24Hour = !is24Hour;
  buttonEl.textContent = is24Hour ? "Switch to 12H" : "Switch to 24H";
});
