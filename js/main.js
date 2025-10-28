function entrar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (email == 'anaclara36250@gmail.com' && senha == '1234567') {
        Swal.fire({
            title: "Acesso Permitido!",
            text: "Seja Bem-vindo a nossa plataforma!",
            icon: "success"
        });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Acesso Negado!",
            text: "Usuário ou Senha Inválidos!",
        });
    }
}