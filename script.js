
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const remainingDisplay = document.getElementById("remaining");
const playAgainButton = document.getElementById("playAgain");

const MAX_ATTEMPTS = 10;
let secretNumber;
let attempts;
let gameOver;

function startGame() {
    // Generate a random number between 1 and 100
    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;
    gameOver = false;

    attemptsDisplay.textContent = attempts;
    remainingDisplay.textContent = MAX_ATTEMPTS;

    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;

    playAgainButton.hidden = true;

    message.textContent = "Make your first guess to get started!";
    message.className = "message";

    guessInput.focus();
}

guessForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (gameOver) {
        return;
    }

    const guess = Number(guessInput.value);

    // Validate input
    if (
        guessInput.value.trim() === "" ||
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        message.textContent =
            "Please enter a whole number between 1 and 100.";
        message.className = "message error";
        return;
    }

    // Count valid guesses only
    attempts++;
    attemptsDisplay.textContent = attempts;

    const remaining = MAX_ATTEMPTS - attempts;
    remainingDisplay.textContent = remaining;

    if (guess === secretNumber) {
        message.textContent =
            `🎉 Correct! The number was ${secretNumber}. You won in ${attempts} attempt(s)!`;
        message.className = "message success";
        endGame();
    } else if (guess < secretNumber) {
        message.textContent = "📈 Too low! Try a higher number.";
        message.className = "message warning";
    } else {
        message.textContent = "📉 Too high! Try a lower number.";
        message.className = "message warning";
    }

    if (!gameOver && attempts >= MAX_ATTEMPTS) {
        message.textContent =
            `😔 Game over! The secret number was ${secretNumber}.`;
        message.className = "message error";
        endGame();
    } else if (!gameOver) {
        guessInput.value = "";
        guessInput.focus();
    }
});

function endGame() {
    gameOver = true;
    guessInput.disabled = true;
    guessButton.disabled = true;
    playAgainButton.hidden = false;
}

playAgainButton.addEventListener("click", startGame);

// Start the first game
startGame();
