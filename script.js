//Variables
const playScreen = document.querySelector('.play-screen')
const replayScreen = document.querySelector('.replay-screen')
const gameInput = document.getElementById('gameInput')
const playButton = document.getElementById('playButton')
const replayButton = document.getElementById('replayButton')
const gameOverMessage = document.getElementById('gameOverMessage')

let randomNumber = Math.floor(Math.random() * 11)
let attempts = 0

//Events
playButton.addEventListener("click", handleGameClick)
replayButton.addEventListener("click", handleReplayClick)

//Functions
function handleGameClick(event) {
    event.preventDefault()
    const attempt = gameInput.value
    
    // -- Testes
    // console.log(`Antes - tentativas: ${attempts}`)
    // console.log(`N: ${randomNumber}`)
    // console.log(`Tentativa: ${attempt}`)

    attempts++
    
    // console.log(`Depois - tentativas: ${attempts}`)

    if(Number(attempt) == randomNumber) {
        playScreen.classList.add('hide')
        replayScreen.classList.remove('hide')
        gameOverMessage.textContent = `Acertou em ${attempts} tentativas!`
    } 

}

function handleReplayClick(event) {
    event.preventDefault()

    //Reset Variables
    attempts = 0
    randomNumber = Math.floor(Math.random() * 11)

    replayScreen.classList.add('hide')
    playScreen.classList.remove('hide')
}