// Función para generar un número aleatorio entre 1 y 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Función para cambiar la imagen de los dados
function changeDiceImage(playerClass, randomNumber) {
    document.querySelector(playerClass).setAttribute("src", `./images/dice${randomNumber}.png`);
}

// Generar números aleatorios para los dos dados
var randomNumber1 = getRandomNumber(); // Número aleatorio para Player 1
var randomNumber2 = getRandomNumber(); // Número aleatorio para Player 2

// Cambiar la imagen del dado de Player 1 utilizando randomNumber1
changeDiceImage(".img1", randomNumber1);

// Cambiar la imagen del dado de Player 2 utilizando randomNumber2
changeDiceImage(".img2", randomNumber2);

// Cambiar el título de acuerdo a quién ganó
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}