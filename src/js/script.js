//*****ELEMENTOS DOM*****

const btn = document.querySelector("#btnJogar")
const page = document.querySelector('#telaInicial')
const pageGame  = document.querySelector('#telaJogo')
const campo = document.querySelector('#nome');
const btnPlay = document.querySelector('#jogar')
const resultado = document.querySelector('#result')


//*****VARIÁVEIS*****

let thisResult = [1,1,1]
let lastResult = [1,1,1]


//*****ALTERANDO DOM COM VARIÁVEIS*****

resultado.innerText = "1 1 1"


//*****BOTÕES*****

//Exibe a tela de jogo
btn.addEventListener("click", () => {
    localStorage.setItem('user', campo.value)
    page.setAttribute("class", "hide")
    pageGame.classList.add("show")  
    document.querySelector('#user').innerHTML = `Olá <b>${localStorage.getItem('user', campo.value)}</b>, boa sorte!`  
})

//Sorteia os números, permite click nas img
//Armazena resultado do último jogo e reseta as img de ? quando clicado novamente
btnPlay.addEventListener('click', ()=>{
    lastResult = thisResult
    imgBack()
    sorteio()
    resultado.innerHTML =  lastResult.replace(/,/g, " ")
    console.log(lastResult)
})


//*****FUNÇÕES*****

const sorteio = ()=>{
    let numbers = []
    let imgs = document.querySelectorAll('#numbers img')
    imgs.forEach((elem, index) =>{
        numbers.push(parseInt(Math.random()*3+1))
        elem.addEventListener('click', (e)=>{
            e.target.src=`./images/number_${numbers[index]}.png`
        })
    })  
    thisResult = numbers.toString()
}
const imgBack = ()=>{
    let imgs = document.querySelectorAll('#numbers img')
    imgs.forEach((elem) =>{
        elem.setAttribute("src", "./images/question.png")
    })
}


//CÓDIGOS ANTIGOS USADOS DURANTE A APRENDIZAGEM
// OU
/* btn.onclick = () => {
    alert(campo.value)
    page.setAttribute("class", "hide")
    pageGame.classList.add("show")
} */
