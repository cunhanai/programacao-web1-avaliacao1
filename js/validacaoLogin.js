function validarLogin() {
  let login = document.getElementById('login-field');
  let password = document.getElementById('password-field');
  let mensagemLogin = document.getElementById('mensagem-login');
  let mensagemSenha = document.getElementById('mensagem-senha');

  mensagemLogin.classList.add('hidden');
  mensagemSenha.classList.add('hidden');

  if (!login.value || !password.value) {
    alert('Informe os dados de autenticação!');
  } else {
    const usuario = getUsuariosCadastrados().filter(
      f => f.login === login.value
    )[0];

    if (!usuario) {
      mensagemLogin.classList.remove('hidden');
    } else if (usuario.password !== password.value) {
      mensagemSenha.classList.remove('hidden');
    } else {
      localStorage.setItem('login', usuario.login);
      window.location.href = './index.html';
    }
  }
}

function getUsuariosCadastrados() {
  return [
    { login: 'Cunhanai', password: '@Ana#123' },
    { login: 'GRCestari', password: 'senhalegal123' },
  ];
}
