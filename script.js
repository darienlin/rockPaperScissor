function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    console.log(num)
    if(num === 0)
    return "rock"

    else if(num === 1)
    return "paper"

    else
    return 'scissor'
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection)
    console.log("draw")

    else if(playerSelection == "paper" && computerSelection == "rock")
    console.log("you win paper beats rock")

    else if(playerSelection == "scissor" && computerSelection == "paper")
    console.log("you win scissor beats paper")

    else if(playerSelection == "rock" && computerSelection == "scissor")
    console.log("you win rock beats scissor")

    else
    console.log("you lose " + playerSelection + " loses to " + computerSelection)
}

function game(){
    for(let i = 0; i < 5; i++){
        let human = window.prompt("Rock Paper or Scissors?").toLowerCase()
        let computerSelection = getComputerChoice()
        playRound(human, computerSelection)
    }

    return 1

}