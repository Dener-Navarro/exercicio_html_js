const form = document.getElementById('form-login');
const numeroDoId = document.getElementById('id-number');
const numeroDaSenha = document.getElementById('numero-senha');
let formEValido = false;

function validaId(numeroDoId) {
  const IdComoArray = numeroDoId.split(' ');
  return numeroDoId.length >= 2;
}

function validaSenha(numeroDaSenha) {
  const SenhaComoArray = numeroDaSenha.split(' ');
  return numeroDaSenha.length >= 4;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  formEValido = validaId(numeroDoId.value);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = 'Login efetuado com sucesso';
    containerMensagemSucesso.style.display = 'block';

    numeroDoId.value = '';
    numeroDaSenha.value = '';
  } else {
    numeroDoId.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
  }
});

numeroDoId.addEventListener('keyup', function (e) {
  formEValido = validaId(e.target.value);
  if (!formEValido) {
    numeroDoId.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    numeroDoId.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
});

numeroDaSenha.addEventListener('keyup', function (e) {
  formEValido = validaSenha(e.target.value);
  if (!formEValido) {
    numeroDaSenha.classList.add('error');
    document.querySelector('.error-senha').style.display = 'block';
  } else {
    numeroDaSenha.classList.remove('error');
    document.querySelector('.error-senha').style.display = 'none';
  }
});
