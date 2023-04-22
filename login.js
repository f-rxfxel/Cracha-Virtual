const submit = document.getElementById("submit")
const ra = document.getElementById("ra")
const senha = document.getElementById("senha")
const incorrectCredentials = document.getElementById("incorrectCredentials")
const univas = document.getElementById("univas")

// verificação de credenciais
let raIV = "123"
let senhaIV = "123"

submit.onclick = () => {
    //se os dados inseridos estiverem errados:
    if(verificarInputs(ra.value, senha.value)) {
        // usuário correto
        incorrectCredentials.classList.add("d-none")
        univas.classList.add("mb-lg-4")
        univas.classList.remove("mb-lg-0")
        window.location.href = "cracha.html";
    } else {
        // usuário incorreto
        incorrectCredentials.classList.remove("d-none")
        incorrectCredentials.classList.add("d-block")
        univas.classList.remove("mb-lg-4")
        univas.classList.add("mb-lg-0")
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