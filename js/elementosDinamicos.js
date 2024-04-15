/* 
    Adiciona o cabeçalho em todas as páginas.

    Caso seja necessário fazer alterações no html, coloca ele em alguma página (para ficar mais fácil de editar) e comenta esse código.

    Depois que o código estiver pronto, cola o conteúdo do header aqui dentro novamente.

    Faça a mesma coisa com o rodapé.
*/

document.addEventListener('DOMContentLoaded', () => {
  let usuario = getUsuarioLogado();
  setHeader(usuario);
  setSidebar(usuario);
  setProfileButton(usuario);
  
});

function getUsuarioLogado() {
  return localStorage.getItem('login');
}

function setHeader(usuario) {
  let header = document.getElementById('header-dinamica');

  header.classList.remove('hidden');

  header.innerHTML = `
    <div>
        <a href="index.html">
            <img
                id="logotipo"
                src="assets/img/logo-bw.png"
                /* mudar alt */
                alt="Logo flat do site contendo um controle de videogame cinza com o botões nas cores amarelo, vermelho e azul claro."
            />  
        </a>
    </div>
    ${!usuario
      ? `<p id="usuario-info__login">Usuário não autenticado</p>`
      : `<a href="/cadastro.html" class="text" id="usuario-info">
            <p id="usuario-info__login">${usuario}</p>
            <img
              id="usuario-info__picture"
              src="assets/img/icon-user.png"
              alt="Ícone de usuário padrão com a representação abstrata de uma pessoa em formas geométricas do peito para cima em escala de cinza"
            />
          </a>`
    }`;
}

function setProfileButton(usuario) {
  if (usuario) {
    document.getElementById('login-button').classList.add('hidden');
    document.getElementById('perfil-button').classList.remove('hidden');
  }
}

function opcaoRadioOutro() {
  if (document.getElementById('genero-outro').checked) {
    document.getElementById('genero-outro-txt').readOnly = false;
  } else {
    document.getElementById('genero-outro-txt').readOnly = true;
    document.getElementById('genero-outro-txt').value = '';
  }
}

function opcaoBoxOutro() {
  if (document.getElementById('caixa-outro').checked) {
    document.getElementById('caixa-outro-txt').readOnly = false;
  } else {
    document.getElementById('caixa-outro-txt').readOnly = true;
    document.getElementById('caixa-outro-txt').value = '';
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

function setSidebar() {
  let nav = document.getElementById('sidebar');

  if (nav) {
    nav.classList.remove('hidden');

    nav.innerHTML = `
      <ul>
      <li>
        <div class="nav-item">
          <p>Destaques</p>
        </div>
      </li>
      <li>
        <div class="nav-item">
          <p>Lançamentos</p>
        </div>
      </li>
      <li>
        <div class="nav-item">
          <p>Gratuitos</p>
        </div>
      </li>
      <li>
        <div class="nav-item">
          <p>Meus itens</p>
        </div>
        <div>
          <ul>
            <li>
              <div class="nav-item nav-subitem">
                <p>Favoritos</p>
              </div>
            </li>
            <li>
              <div class="nav-item nav-subitem">
                <p>Desejados</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <div class="nav-item">
      <p id="login-button"><a href="/login.html">Login</a></p>
      <p
        id="perfil-button"
        class="hidden"
      >
        <a href="/cadastro.html">
          Perfil
        </a>
      </p>
    </div>`;
  }
}

function paletteSwap() {

  var estilo1 = document.getElementById('estilo-1');
  var estilo2 = document.getElementById('estilo-2');
  var logo = document.getElementById('logotipo');

  if (estilo2.checked) {
    logo.src = 'assets/img/logo-grd.png';

    document.documentElement.style.setProperty('--font', '"Nunito Sans", sans-serif');

    document.documentElement.style.setProperty('--background', '#171e27');
    document.documentElement.style.setProperty('--container-color', '#33445c');
    document.documentElement.style.setProperty('--text-color', '#cec4f3');
    document.documentElement.style.setProperty('--text-background', '#d1d1d1');
    document.documentElement.style.setProperty('--primary', '#594ae2');
    document.documentElement.style.setProperty('--secondary', '#cf65ca');
    document.documentElement.style.setProperty('--tertiary', '#d7ff46');
  } else if (estilo1.checked) {
    logo.src = 'assets/img/logo-bw.png';

    document.documentElement.style.setProperty('--font', '"Comfortaa", sans-serif');

    document.documentElement.style.setProperty('--background', '#e5e5e5');
    document.documentElement.style.setProperty('--container-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#464655');
    document.documentElement.style.setProperty('--text-background', '#4d6079');
    document.documentElement.style.setProperty('--primary', '#82b9ff');
    document.documentElement.style.setProperty('--secondary', '#ff6464');
    document.documentElement.style.setProperty('--tertiary', '#ffcd46');
  }
}