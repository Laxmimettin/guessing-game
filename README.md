# 🎯 Number Guessing Game

## 📌 Project Overview

The Number Guessing Game is a simple and interactive web application developed using HTML5, CSS3, and JavaScript. The player tries to guess a randomly generated secret number between 1 and 100 within a maximum of 10 attempts.

The game provides higher or lower hints after each guess and displays a success message when the correct number is guessed.

## 🎯 Objectives

- Practice JavaScript random number generation.
- Understand conditional statements and event handling.
- Learn DOM manipulation and state tracking.
- Implement input validation.
- Design a responsive and user-friendly interface.

## 🛠️ Technologies Used

- **HTML5** – Structures the game interface.
- **CSS3** – Provides styling, animations, and responsive design.
- **JavaScript** – Handles game logic, validation, and attempt tracking.

## ✨ Features

- Random secret number between 1 and 100.
- Higher and lower hints for incorrect guesses.
- Attempt counter and remaining-attempt counter.
- Maximum of 10 valid guesses.
- Input validation for invalid numbers.
- Win and game-over messages.
- Play Again button to restart the game.
- Responsive design for desktop and mobile devices.
- Smooth animations and interactive buttons.

## 📂 Project Structure

```text
number-guessing-game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run the Project

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Ensure that all three source files are in the same folder.
4. Open `index.html` in your web browser.
5. Enter a number between 1 and 100.
6. Follow the hints and try to guess the secret number.
7. Click **Play Again** to start a new game.

## 🧠 Game Logic

1. Generate a random integer between 1 and 100 using `Math.random()` and `Math.floor()`.
2. Accept the player's guess through an input field.
3. Validate the input to ensure it is a whole number within the permitted range.
4. Increase the attempt counter for each valid guess.
5. Display a higher or lower hint depending on the guess.
6. Display a winning message when the correct number is entered.
7. End the game after 10 unsuccessful attempts.
8. Allow the player to restart the game.

## 📚 JavaScript Concepts Practiced

- Variables and constants
- Functions
- `Math.random()` and `Math.floor()`
- Conditional statements
- Event listeners
- DOM manipulation
- Form validation
- Boolean state management

## 🔮 Future Enhancements

- Add multiple difficulty levels.
- Introduce a timer to track completion time.
- Store high scores using local storage.
- Add sound effects for correct and incorrect guesses.
- Provide hints based on the distance from the secret number.

## 🎓 Learning Outcome

This project demonstrates fundamental front-end web development skills through an interactive number guessing game. It helps develop a better understanding of JavaScript logic, user input validation, event handling, and responsive web design.
