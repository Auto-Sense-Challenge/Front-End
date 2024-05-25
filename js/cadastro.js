document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".inputs");
    document.getElementById('btnEnviar').addEventListener('click', function(event) {
        event.preventDefault();
      
        var nomeUsuario = document.querySelector("#campoNomeUser").value;
        var nomeCompleto = document.querySelector("#campoNome").value;
        var senha = document.querySelector("#capmoSenha").value;
        var email = document.querySelector("#campoEmail").value;

        console.log('Nome de usuário:', nomeUsuario);
        console.log('Nome completo:', nomeCompleto);
        console.log('Senha:', senha);
        console.log('E-mail:', email);


    });
});
