// Botão de tema claro/escuro
const temaBtn = document.getElementById("temaBtn");
temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// FORMULÁRIO - VALIDAÇÃO
document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("mensagem").value.trim();

    // Verificar campos vazios
    if (nome === "" || email === "" || msg === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Validação simples de e-mail
    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido!");
        return;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso!");

    // Limpar formulário
    document.getElementById("formContato").reset();
});
