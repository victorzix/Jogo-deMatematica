const question = document.getElementById("question");
const lifes = document.getElementById("lifes");
const points = document.getElementById("points");
const form = document.getElementById("forms");
const input = document.getElementById("guessing");
let numero1 = Math.round(Math.random() * 180);
let numero2 = Math.round(Math.random() * 180);
let resultado = numero1 + numero2;

let lifepoints = 3;
let score = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

lifes.textContent = "Vidas: " + lifepoints;
points.textContent = "Pontos: " + score;
question.textContent = "Quanto é " + numero1 + " + " + numero2;

function Submit() {
  let log = document.getElementById("log");
  const advinha = input.value;

  if (advinha == resultado) {
    score++;
    log.textContent = "Boa";
  } else {
    lifepoints--;
    log.textContent = "Errou";
  }

  if (lifepoints == 0) {
    restart();
    alert("perdeu");
  }
  lifes.textContent = "Vidas: " + lifepoints;
  points.textContent = "Pontos: " + score;

  generateNumber();
  question.textContent = "Quanto é " + numero1 + " + " + numero2;
  input.value = "";
  setTimeout(() => {
    log.textContent = ""
  }, 3000);
}
function generateNumber() {
  numero1 = Math.round(Math.random() * 180);
  numero2 = Math.round(Math.random() * 180);
  resultado = numero1 + numero2;
}

function restart() {
  lifepoints = 3;
  score = 0;
}
