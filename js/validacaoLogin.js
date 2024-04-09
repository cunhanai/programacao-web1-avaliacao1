function validarLogin() {
  localStorage.clear()

  let login = document.getElementById('login-field')
  let password = document.getElementById('password-field')

  const usuario = getUsuariosCadastrados().filter(
    f => f.login === login.value
  )[0]

  // fazer as validações de acordo com o professor
  // provavel que eu tenha que mudar as validações do pattern para fazer via JS para se adequar aos requisitos, ou mudar o title de alguma forma

  if (!usuario) {
    console.log('usuario nao encontrado')
  } else if (usuario.password !== password.value) {
    console.log('senha incorreta')
  } else {
    localStorage.setItem('login', usuario.login)
    window.location.href = './index.html'
  }
}

function getUsuariosCadastrados() {
  return [
    { login: 'Cunhanai', password: '@Ana#123' },
    { login: 'GRCestari', password: '@Gabriel$123' },
  ]
}
