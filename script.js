function GrabCompInput() {
    let grab_ph = Math.floor(Math.random() * 3)

    if (grab_ph === 0) {
        grab_ph = "r"
    } else if (grab_ph === 1) {
        grab_ph = "p"
    } else if (grab_ph === 2){
        grab_ph = "s"
    }
    return grab_ph
}

let round = 1

function PlayRound(computerchoice, round) {
    let playerinput = prompt("You are playing rock paper scissors, round " + round + " of five. Please make your selection (r/p/s): ")
    playerinput.toLowerCase()
    let winner = ""
    if (playerinput === "r" && computerchoice === "s") {
        winner = "player"
        
    } else if (playerinput === "p" && computerchoice === "r") {
        winner = "player"
    } else if (playerinput === "s" && computerchoice === "p") {
        winner = "player"
    } else if (playerinput === computerchoice) {
        winner = "draw"
    } else {
        winner = "computer"
    }

    if (winner === "computer") {
        console.log("This round was won by the computer. One point will be awarded to the computer.")
        return "c"
    } else if (winner === "player") {
        console.log("This round was won by the player. One point will be awarded to the player.")
        return "p"
    } else if (winner === "draw") {
        console.log("This round was a draw! No points will be awarded")
        return 0
    }
}

function PlayGame(round) {
    player_score = 0
    computer_score = 0
    while (round < 6){
        let computerinput = GrabCompInput()
        let result = PlayRound(computerinput, round)

        if (result === "c") {
            computer_score += 1
        } else if (result === "p") {
            player_score += 1
        }

        round += 1
    }
    
    console.log("The game has ended. Counting points...")

    if (player_score > computer_score){
        console.log("Player has won. Player score: " + player_score + "| computer score: " + computer_score)
    } else if (computer_score > player_score) {
        console.log("Computer has won. Player score: " + player_score + "| computer score: " + computer_score)
    }   else {
        console.log("The game was a draw. Player score: " + player_score + "| computer score: " + computer_score)
    }

    let RestartCondition = prompt("Would you like to play again? (y/n):")
    if (RestartCondition === "y") {
        location.reload()
    } else {
        console.log("Thank you for visiting idi0cy's rock paper scissors project.")
    }
}

PlayGame(round)