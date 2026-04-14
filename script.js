const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const secondQuestion = document.getElementById("secondQuestion");
const sureBtn = document.getElementById("sureBtn");
const finalText = document.getElementById("finalText");

// ЖОҚ кнопкасы қашады
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// ИӘ басылса → 2-сұрақ шығады
yesBtn.addEventListener("click", () => {
  document.getElementById("buttons").style.display = "none";
  secondQuestion.style.display = "block";
});

// ӘРІНЕ басылса → соңғы мәтін
sureBtn.addEventListener("click", () => {
  secondQuestion.style.display = "none";
  finalText.style.display = "block";
});