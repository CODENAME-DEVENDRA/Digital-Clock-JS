function updateClock() {
  const clock = document.getElementById("clock");

  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  clock.textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
