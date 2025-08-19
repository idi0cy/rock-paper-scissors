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

function PlayRound(round, playerinput) {
    let winner = ""
    let computerinput = GrabCompInput()
    if (playerinput === "r" && computerinput === "s") {
        winner = "player"
        
    } else if (playerinput === "p" && computerinput === "r") {
        winner = "player"
    } else if (playerinput === "s" && computerinput === "p") {
        winner = "player"
    } else if (playerinput === computerinput) {
        winner = "draw"
    } else {
        winner = "computer"
    }

    const textDisplay = document.querySelector("#textDisplay")

    if (winner === "computer") {
        console.log("Round " + round + " was won by the computer. One point will be awarded to the computer.")
        let result = document.createElement("div")
        result.classList.add("result")
        result.textContent = "Round " + round + " was won by the computer. One point will be awarded to the computer."
        textDisplay.appendChild(result)
        return "c"
    } else if (winner === "player") {
        console.log("Round " + round + " was won by the player. One point will be awarded to the player.")
        let result = document.createElement("div")
        result.classList.add("result")
        result.textContent = "Round " + round + " was won by the player. One point will be awarded to the player."
        textDisplay.appendChild(result)
        return "p"
    } else if (winner === "draw") {
        console.log("Round " + round +" was a draw! No points will be aw arded.")
        let result = document.createElement("div")
        result.classList.add("result")
        result.textContent = "Round " + round +" was a draw! No points will be awarded."
        textDisplay.appendChild(result)
        return 0
    }
}

const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")

let pScore = 0
let cScore = 0

const textDisplay = document.querySelector("#textDisplay")

btnRock.addEventListener('click', function(){
    textDisplay.replaceChildren()
    let scoreAdd = PlayRound(round, "r")

    if (scoreAdd === "p"){
        pScore = pScore + 1
    } else if (scoreAdd === "c"){
        cScore = cScore + 1
    } 

    let score = document.createElement("p")
    score.classList.add("score")
    score.textContent = "Player score: " + pScore + " | Computer score: " + cScore
    textDisplay.appendChild(score)
})

btnPaper.addEventListener('click', function(){
    textDisplay.replaceChildren()
    let scoreAdd = PlayRound(round, "p")
    
    if (scoreAdd === "p"){
        pScore = pScore + 1
    } else if (scoreAdd === "c"){
        cScore = cScore + 1
    } 

    let score = document.createElement("p")
    score.classList.add("score")
    score.textContent = "Player score: " + pScore + " | Computer score: " + cScore
    textDisplay.appendChild(score)
})

btnScissors.addEventListener('click', function(){
    textDisplay.replaceChildren()
    let scoreAdd = PlayRound(round, "s")

    if (scoreAdd === "p"){
        pScore = pScore + 1
    } else if (scoreAdd === "c"){
        cScore = cScore + 1
    } 

    let score = document.createElement("p")
    score.classList.add("score")
    score.textContent = "Player score: " + pScore + " | Computer score: " + cScore
    textDisplay.appendChild(score)
})