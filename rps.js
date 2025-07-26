// Player and Computer Choice 

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    // Comparing player and computer choice and output

    if (playerChoice === computerChoice) {
        result = `It is a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${(playerChoice)} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${(computerChoice)} beats ${playerChoice}.`; 
    }

    document.getElementById("rps-result").textContent = result;
}