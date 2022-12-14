//*****ELEMENTOS DOM*****

const btn = document.querySelector("#btnJogar")
const page = document.querySelector('#telaInicial')
const pageGame = document.querySelector('#telaJogo')
const campo = document.querySelector('#nome')
const btnPlay = document.querySelector('#jogar')
const resultado = document.querySelector('#result')
const points = document.querySelector('#pontuacao')


//*****VARIÁVEIS*****

let thisResult = [1, 1, 1]
let lastResult = [1, 1, 1]
let ponto = 0


//*****ALTERANDO DOM COM VARIÁVEIS*****

resultado.innerText = "1 1 1"


//*****BOTÕES*****

//Exibe a tela de jogo
btn.addEventListener("click", () => {
    localStorage.setItem('user', campo.value)
    page.setAttribute("class", "hide")
    pageGame.classList.add("show")
    document.querySelector('#user').innerHTML = `Olá <b>${localStorage.getItem('user', campo.value)}</b>, boa sorte!`
    play()
})

//Sorteia os números, permite click nas img
//Armazena resultado do último jogo e reseta as img de ? quando clicado novamente
btnPlay.addEventListener('click', () => {
    play()

})

if (localStorage.getItem('user') !== null) {
    campo.value = localStorage.getItem('user')
}

//*****FUNÇÕES*****

const sorteio = () => {
    let numbers = []
    let imgs = document.querySelectorAll('#numbers img')
    imgs.forEach((elem, index) => {
        numbers.push(parseInt(Math.random() * 3 + 1))
        elem.addEventListener('click', (e) => {
            e.target.src = `./images/number_${numbers[index]}.png`
        })
    })
    thisResult = numbers
}
const imgBack = () => {
    document.querySelector('#numbers').innerHTML = `
        <img src="./images/question.png" alt="question" class="img--question">
        <img src="./images/question.png" alt="question" class="img--question">
        <img src="./images/question.png" alt="question" class="img--question">
    `
}

function pontuacao(arr1, arr2) {
    if (arr1[0] === arr1[1] && arr1[1] === arr1[2] || arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
        ponto += 1
    } else if ((arr1[0] === arr1[1] && arr1[1] === arr1[2]) && (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2])) {
        ponto += 2
    }
    points.innerText = ponto
}

const play = () => {
    lastResult = thisResult
    keepResult = lastResult
    resultado.innerHTML = lastResult.toString().replace(/,/g, " ")
    imgBack()
    sorteio()
    lastResult = thisResult
    pontuacao(lastResult, keepResult)
}


//CÓDIGOS ANTIGOS USADOS DURANTE A APRENDIZAGEM
// OU
/* btn.onclick = () => {
    alert(campo.value)
    page.setAttribute("class", "hide")
    pageGame.classList.add("show")
} */
