let computerMove = '';

let result = '';

let score = {
    wins: 0,
    losses: 0,
    ties: 0
} || JSON.parse(localStorage.getItem('score'));

function computerPlay() {
    const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1/3) {
            computerMove = 'rock'  
            
        }
        else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'paper'
            
        }
        else if (randomNumber >= 2/3 && randomNumber < 1) {
            computerMove = 'scissors'
            
        }
        console.log(`computer randomly picked: ${computerMove}`);
}

function play(userMove) {

    if (userMove === 'rock') {

        if (computerMove === 'rock') {
            result = `computer picked ${computerMove}, you picked ${userMove}, tie`
        }

        else if (computerMove === 'paper') {
            result = `computer picked ${computerMove}, you picked ${userMove}, you lose`
        }

        else if (computerMove === 'scissors') {
            result = `computer picked ${computerMove}, you picked ${userMove}, you win`
        }
        scoreUpdate();
    } 
    
    else if (userMove === 'paper') {

        if (computerMove === 'rock') {
            result = `computer picked ${computerMove}, you picked ${userMove}, you win`
        }

        else if (computerMove === 'paper') {
            result = `computer picked ${computerMove}, you picked ${userMove}, tie`
        }

        else if (computerMove === 'scissors') {
            result = `computer picked ${computerMove}, you picked ${userMove}, you lose`
        }
        scoreUpdate();
    } 

    else if (userMove === 'scissors') {

        if (computerMove === 'rock') {
            result = `computer picked ${computerMove}, you picked ${userMove}, you lose`
        }

        else if (computerMove === 'paper') {
            result = `computer picked ${computerMove}, you picked ${userMove}, you win`
        }

        else if (computerMove === 'scissors') {
            result = `computer picked ${computerMove}, you picked ${userMove}, tie`
        }
        scoreUpdate();
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`${result}
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}
    function scoreUpdate() {
        if (result.includes('win')) {
            score.wins += 1;
        } 
        else if (result.includes('lose')) {
            score.losses += 1;
        } 
        else if (result.includes('tie')) {
            score.ties += 1;
        }
    }
