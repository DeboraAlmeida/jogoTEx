const btn = document.querySelector("#btnJogar")
const page = document.querySelector('#telaInicial')
const pageGame  = document.querySelector('#telaJogo')
const campo = document.querySelector('#nome');

btn.addEventListener("click", () => {
    localStorage.setItem('user', campo.value)
    page.setAttribute("class", "hide")
    pageGame.classList.add("show")  
    document.querySelector('#user').innerText = localStorage.getItem('user', campo.value)  
})
// OU
/* btn.onclick = () => {
    alert(campo.value)
    page.setAttribute("class", "hide")
    pageGame.classList.add("show")
} */

