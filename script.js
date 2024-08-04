document.addEventListener("DOMContentLoaded", function() {
    const minNum = 1;
    const maxNum = 100;
    const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    let attempts = 0;

    document.getElementById("guessButton").addEventListener("click", function() {
        const guessInput = document.getElementById("guessInput");
        const guess = Number(guessInput.value);
        const message = document.getElementById("message");

        if (isNaN(guess) || guess < minNum || guess > maxNum) {
            message.textContent = "Please enter a valid number between " + minNum + " and " + maxNum;
        } else {
            attempts++;
            if (guess < answer) {
                message.textContent = "TOO LOW! TRY AGAIN!";
            } else if (guess > answer) {
                message.textContent = "TOO HIGH! TRY AGAIN!";
            } else {
                message.textContent = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
            }
        }

        guessInput.value = ''; // Clear the input field after each attempt
        guessInput.focus(); // Set focus back to the input field
    });
});