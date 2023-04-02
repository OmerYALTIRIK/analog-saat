let numbersDiv = document.getElementById("numbers");

for (let i = 0; i < 12; i++) {
  let numberDiv = document.createElement("div");
  numberDiv.classList.add("text");
  numberDiv.innerText = i + 1;

  let ang = (((i + 1) * 30 - 90) / 180) * Math.PI;
  numberDiv.style.left = `${Math.cos(ang) * 300 + 400}px`;
  numberDiv.style.top = `${Math.sin(ang) * 300 + 400}px`;
  numbersDiv.appendChild(numberDiv);
}

function timeFnc() {
  let now = new Date();
  let akrep = document.querySelector(".akrep");
  akrep.style = `transform: rotate(${now.getHours() * 30}deg)`;
  let yelkovan = document.querySelector(".yelkovan");
  yelkovan.style = `transform: rotate(${now.getMinutes() * 6}deg)`;
  let second = document.querySelector(".second");
  second.style = `transform: rotate(${now.getSeconds() * 6}deg)`;
}
setInterval(timeFnc, 1000);
timeFnc();
