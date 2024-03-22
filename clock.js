setInterval(showTime, 1000);

function showTime() {
  let time = new Date().toLocaleTimeString();

  document.getElementById("clock").innerHTML = time;
}

showTime();

function changeclr() {
  if (document.body.classList.contains("background")) {
    document.body.classList.remove("background");
    iconimg.classList.add("fa-moon");
    iconimg.classList.remove("fa-sun");
    clock.style.color = "black";
    clock.style.borderColor = "black";
  } else {
    document.body.classList.add("background");
    iconimg.classList.remove("fa-moon");
    iconimg.classList.add("fa-sun");
    clock.style.color = "white";
    clock.style.borderColor = "white";
  }
}
