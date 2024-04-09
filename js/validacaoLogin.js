function validarLogin() {
  let login = document.getElementById('login-field')
  let password = document.getElementById('password-field')

  const usuario = getUsuariosCadastrados().filter(
    f => f.login === login.value
  )[0]

  if (!usuario) {
    console.log('usuario nao encontrado')
  } else if (usuario.password !== password.value) {
    console.log('senha incorreta')
  } else {
    console.log(usuario)
  }
}

function getUsuariosCadastrados() {
  return [
    { login: 'Cunhanai', password: '@Ana#123' },
    { login: 'GRCestari', password: '@Gabriel$123' },
  ]
}
