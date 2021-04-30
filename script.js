var email = 'andre.carlos.ribeiro7@gmail.com';

console.log('O meu e-mail é: ' + email);

document.getElementById("btn-submit").addEventListener("click", function () {
    console.log('worked');
});

document.querySelector("#form-login").addEventListener("submit", function (e) {
    e.preventDefault();

    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    var person = {
        email,
        password
    };

    if (!person.email || !person.password) {
        console.error('Os campos devem ser preenchidos!!');
    } else {
        console.log('Dados enviado com sucesso, Email: ' + email + '\nSenha: ' + password);
    }


});
