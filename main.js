/* Variáveis */
const screen01 = document.querySelector('.screen01')
const screen02 = document.querySelector('.screen02')
const imgClick = document.querySelector('#imgClick')
const btnReset = document.querySelector('#btnReset')

let phrase = document.getElementById('phrase')
const massageData = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Que o dia comece bem e termine ainda melhor.',
    'Às vezes as coisas demoram, mas acontecem. O importante é saber esperar e não perder a fé!',
    'Um pequeno pensamento positivo pela manhã pode mudar todo o seu dia.',
]

/* Eventos */
imgClick.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleClickReset)
document.addEventListener('keydown', pressEnter)


/* Funções */

function pressEnter(e) {
    if (e.key == 'Enter'&& screen01.classList.contains('hide')) {
        handleClickReset()
    } else {
        handleClick()
    }
}

function toggleScreen() {
    screen01.classList.toggle('hide')
    screen02.classList.toggle('hide')
}


function handleClick() {
    toggleScreen()
    let randomMassage = Math.floor(Math.random() * massageData.length)
    
    phrase.textContent = massageData[randomMassage]
}


function handleClickReset() {
    toggleScreen() 
}
