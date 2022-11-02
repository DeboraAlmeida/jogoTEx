const btn = document.querySelector("#btnJogar")
const page = document.querySelector('#telaInicial')
const pageGame  = document.querySelector('#telaJogo')
const campo = document.querySelector('#nome');

btn.addEventListener("click", () => {
    alert(campo.value)
    page.setAttribute("class", "hide")
    pageGame.classList.add("show")    
})
// OU
/* btn.onclick = () => {
    alert(campo.value)
    page.setAttribute("class", "hide")
    pageGame.classList.add("show")
} */

