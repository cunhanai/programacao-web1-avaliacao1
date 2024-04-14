/* 
    Adiciona o cabeçalho em todas as páginas.

    Caso seja necessário fazer alterações no html, coloca ele em alguma página (para ficar mais fácil de editar) e comenta esse código.

    Depois que o código estiver pronto, cola o conteúdo do header aqui dentro novamente.

    Faça a mesma coisa com o rodapé.
*/

document.addEventListener('DOMContentLoaded', () => {
  let usuario = getUsuarioLogado()
  setHeader(usuario)
})

function getUsuarioLogado() {
  return localStorage.getItem('login')
}

function setHeader(usuario) {
  let header = document.getElementById('header-dinamica')

  header.classList.add('container')

  header.innerHTML = `
    <div id="logotipo">
        <a href="index.html">
            <img
                id="logotipo"
                src="assets/img/logo-bw.png"
                /* mudar alt */
                alt="Logo flat do site contendo um controle de videogame cinza com o botões nas cores amarelo, vermelho e azul claro."
            />  
        </a>
    </div>
    <div><h1 class="center">GAMELOG</h1></div>
    <div id="usuario-info">
        <p id="usuario-info__login">${
          usuario || 'Usuário não autenticado'
        }</p>${
    !usuario
      ? ''
      : `<img
        id="usuario-info__picture"
        src="assets/img/icon-user.png"
        alt="Ícone de usuário padrão com a representação abstrata de uma pessoa em formas geométricas do peito para cima em escala de cinza"
    />`
  }
    </div>`

  document.body.appendChild(header)
}

function opcaoRadioOutro() {
  if (document.getElementById('radio-outro').checked) {
    document.getElementById('radio-outro-txt').readOnly = false;
  } 
  else {
    document.getElementById('radio-outro-txt').readOnly = true;
    document.getElementById('radio-outro-txt').value = "";
  }
}

function opcaoBoxOutro() {
  if (document.getElementById('caixa-outro').checked) {
    document.getElementById('caixa-outro-txt').readOnly = false;
  } 
  else {
    document.getElementById('caixa-outro-txt').readOnly = true;
    document.getElementById('caixa-outro-txt').value = "";
  }
}

function mostrarSenha() {
  var alterador = document.getElementById('senha');
  var olho = document.getElementById('botao-olho');

  if (alterador.type === 'password') {
    alterador.type = 'text';
    olho.src = 'assets/img/view-16px.png';
  } else {
    alterador.type = 'password';
    olho.src = 'assets/img/hidden-16px.png';
  }
}