// Calculator functionality
let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Floating small hearts
const heartsContainer = document.querySelector(".hearts-container");

for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 15 + Math.random() * 20 + "px";
  heart.style.top = Math.random() * 100 + "vh";
  heartsContainer.appendChild(heart);
}

// Big hearts background
const bigHeartsContainer = document.querySelector(".big-hearts-container");

for (let i = 0; i < 10; i++) {
  const bigHeart = document.createElement("div");
  bigHeart.textContent = "💖";
  bigHeart.style.position = "absolute";
  bigHeart.style.fontSize = 80 + Math.random() * 80 + "px"; // big hearts
  bigHeart.style.top = Math.random() * 100 + "vh";
  bigHeart.style.left = Math.random() * 100 + "vw";
  bigHeart.style.opacity = 0.08 + Math.random() * 0.1;
  bigHeartsContainer.appendChild(bigHeart);
}