var userScore = 0
var computerScore = 0

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
    if(playerSelection == computerSelection){
        displayContent.textContent = 'draw'
    }

    else if(playerSelection == "paper" && computerSelection == "rock"){
        userScore++
        displayContent.textContent = 'You win ' + playerSelection +  ' beats ' + computerSelection
        content.textContent = 'Player: ' + userScore + ' | Computer: ' + computerScore;
    }
    //console.log("you win paper beats rock")

    else if(playerSelection == "scissor" && computerSelection == "paper"){
        userScore++
        displayContent.textContent = 'You win ' + playerSelection +  ' beats ' + computerSelection
        content.textContent = 'Player: ' + userScore + ' | Computer: ' + computerScore;
    }
    //console.log("you win scissor beats paper")

    else if(playerSelection == "rock" && computerSelection == "scissor"){
        userScore++
        displayContent.textContent = 'You win ' + playerSelection +  ' beats ' + computerSelection
        content.textContent = 'Player: ' + userScore + ' | Computer: ' + computerScore;
    }
    //console.log("you win rock beats scissor")

    else{
        computerScore++
        displayContent.textContent = 'You lose ' + computerSelection +  ' beats ' + playerSelection
        content.textContent = 'Player: ' + userScore + ' | Computer: ' + computerScore;
    }
    
    if(computerScore == 5){
    content.textContent = 'Computer wins, final score ' + computerScore + '-' + userScore;
    userScore = 0
    computerScore = 0
    }

    if(userScore == 5){
    content.textContent = 'Player wins, final score ' + userScore + '-' + computerScore;
    userScore = 0
    computerScore = 0
    }

}

const paper = document.querySelector('#paper')
paper.addEventListener('click', () =>{
    playRound('paper', getComputerChoice())
})

const rock = document.querySelector('#rock')
rock.addEventListener('click', () =>{
    playRound('rock', getComputerChoice())
})

const scissor = document.querySelector('#scissor')
scissor.addEventListener('click', () =>{
    playRound('scissor', getComputerChoice())
})

const display = document.querySelector('.container')
const displayContent = document.createElement('h3');
displayContent.classList.add('center')
displayContent.textContent = 'First Score to 5 wins'
display.appendChild(displayContent);

const scoreBoard = document.querySelector('.container')
const content = document.createElement('h3');
content.classList.add('center')
content.textContent = 'Player: ' + userScore + ' | Computer: ' + computerScore;
scoreBoard.appendChild(content);