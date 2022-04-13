function hit({fighter1, fighter2}) {
    return(
        fighter1.attackBox.position.x + fighter1.attackBox.width >= fighter2.position.x &&
        fighter1.attackBox.position.x <= fighter2.position.x + fighter2.width &&
        fighter1.attackBox.position.y + fighter1.attackBox.height >= fighter2.position.y &&
        fighter1.attackBox.position.y <= fighter2.position.y + fighter2.height
    )
}

function determineWinner ({player1, player2, timerID}) {
    clearTimeout(timerID)
    if (player1.health == player2.health) {
        document.querySelector('#result').innerHTML = 'Tie'
    } else if (player1.health > player2.health) {
        document.querySelector('#result').innerHTML = 'Player 1 Wins'
    } else if (player1.health < player2.health) {
        document.querySelector('#result').innerHTML = 'Player 2 Wins'
    }
}

let timer = 60
let timerID
function decreaseTimer() {
    if (timer > 0) {
        timerID = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if(timer === 0) {
        determineWinner({player1, player2, timerID})
    }
}