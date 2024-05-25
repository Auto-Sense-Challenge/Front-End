document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".inputs");
    document.getElementById('btnEnviar').addEventListener('click', function(event) {
        event.preventDefault();

        document.getElementById('cadastroButton').textContent = "Dados Enviados!";

        var nomeUsuario = document.getElementById('txtfield1').value;
        var nomeCompleto = document.getElementById('txtfield2').value;
        var senha = document.getElementById('txtfield3').value;
        var email = document.getElementById('txtfield4').value;

        document.getElementById('btnEnviar')

        console.log('Nome de usuário:', nomeUsuario);
        console.log('Nome completo:', nomeCompleto);
        console.log('Senha:', '**senha**');
        console.log('E-mail:', email);


    });
});
