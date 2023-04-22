const submit = document.getElementById("submit")
const ra = document.getElementById("ra")
const senha = document.getElementById("senha")
const incorrectCredentials = document.getElementById("incorrectCredentials")

// verificação de credenciais
let raIV = "123"
let senhaIV = "123"

submit.onclick = () => {
    //se os dados inseridos estiverem errados:
    if(verificarInputs(ra.value, senha.value)) {
        // usuário correto
        incorrectCredentials.style.display = "none"
        document.getElementById("univas").classList.add("mb-5")
        document.getElementById("univas").classList.remove("mb-3")
        window.location.href = "cracha.html";
    } else {
        // usuário incorreto
        incorrectCredentials.style.display = "block"
        document.getElementById("univas").classList.remove("mb-5")
        document.getElementById("univas").classList.add("mb-3")
        incorrectCredentials.classList.add("mb-3")
        senha.classList.add("is-invalid")
        ra.classList.add("is-invalid")
    }
}

[senha, ra].forEach(input => {
    input.addEventListener("click", () => {
        senha.classList.remove("is-invalid")
        ra.classList.remove("is-invalid")
    })
});

function verificarInputs() {
    if(raIV == ra.value && senhaIV == senha.value) {
        return true
    }
    return false
}