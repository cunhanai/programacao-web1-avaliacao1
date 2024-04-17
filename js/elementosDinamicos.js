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
  loadPalette();
  mostrarJogos('jogo');

  let menuButton = document.getElementById('toogle-menu');

  menuButton.addEventListener('click', () => {
    let nav = document.getElementById('sidebar');

    if (nav.style.display == 'none') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  });
});

function setMediaQuery(media) {
  let nav = document.getElementById('sidebar');

  if (media.matches) {
    nav.style.display = 'block';
  }
}

// Create a MediaQueryList object
var mediaQuery = window.matchMedia('(min-width: 801px)');

// Call listener function at run time
setMediaQuery(mediaQuery);

// Attach listener function on state changes
mediaQuery.addEventListener('change', function () {
  setMediaQuery(mediaQuery);
});

function getUsuarioLogado() {
  return localStorage.getItem('login');
}

function setHeader(usuario) {
  let header = document.getElementById('header-dinamica');

  header.classList.remove('hidden');

  header.innerHTML = `
    <div class="header-start">
      <img
        id="toogle-menu"
        src="assets/img/show-nav-bw.png"
        alt="Logo flat do site contendo um controle de videogame preto e branco, ou gradiente."
      />
      <a href="index.html">
          <img
              id="logotipo"
              src="assets/img/logo-bw.png"
              alt="Logo flat do site contendo um controle de videogame preto e branco, ou gradiente."
          />  
      </a>
    </div>
    ${
      !usuario
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

    nav.innerHTML = `<div class="scrollable">
      <ul>
      <li href="index.html">
        <div class="nav-item" onclick="destaques()">
          <p>Destaques</p>
        </div>
      </li>
      <li>
        <div class="nav-item" onclick="lancamentos()">
          <p>Lançamentos</p>
        </div>
      </li>
      <li>
        <div class="nav-item" onclick="gratuitos()">
          <p>Gratuitos</p>
        </div>
      </li>
      <li>
        <div class="nav-item" onclick="myItems()">
          <p>Meus itens</p>
        </div>
        <div>
          <ul>
            <li>
              <div class="nav-item nav-subitem" onclick="favoritos()">
                <p>Favoritos</p>
              </div>
            </li>
            <li>
              <div class="nav-item nav-subitem" onclick="desejados()">
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

function loadPalette() {
  var logo = document.getElementById('logotipo');
  var menu = document.getElementById('toogle-menu');

  if (!localStorage.getItem('logo')) {
    localStorage.setItem('logo', 'assets/img/logo-bw.png');
    localStorage.setItem('menu', 'assets/img/show-nav-bw.png');
    localStorage.setItem('checked', 'estilo1');
  }

  logo.src = localStorage.getItem('logo');
  menu.src = localStorage.getItem('menu');

  document.documentElement.style.setProperty(
    '--font',
    localStorage.getItem('font')
  );

  document.documentElement.style.setProperty(
    '--background',
    localStorage.getItem('background')
  );
  document.documentElement.style.setProperty(
    '--container-color',
    localStorage.getItem('container-color')
  );
  document.documentElement.style.setProperty(
    '--text-color',
    localStorage.getItem('text-color')
  );
  document.documentElement.style.setProperty(
    '--text-background',
    localStorage.getItem('text-background')
  );
  document.documentElement.style.setProperty(
    '--primary',
    localStorage.getItem('primary')
  );
  document.documentElement.style.setProperty(
    '--secondary',
    localStorage.getItem('secondary')
  );
  document.documentElement.style.setProperty(
    '--tertiary',
    localStorage.getItem('tertiary')
  );
}

function paletteSwap() {
  var estilo1 = document.getElementById('estilo-1');
  var estilo2 = document.getElementById('estilo-2');

  if (estilo2.checked) {
    localStorage.setItem('checked', 'estilo2');

    localStorage.setItem('logo', 'assets/img/logo-grd.png');
    localStorage.setItem('menu', 'assets/img/show-nav-grd.png');

    localStorage.setItem('font', '"Nanum Gothic", sans-serif');

    localStorage.setItem('background', '#171e27');
    localStorage.setItem('container-color', '#33445c');
    localStorage.setItem('text-color', '#cec4f3');
    localStorage.setItem('text-background', '#4d6079');
    localStorage.setItem('primary', '#594ae2');
    localStorage.setItem('secondary', '#d1286b');
    localStorage.setItem('tertiary', '#d7ff46');
  } else if (estilo1.checked) {
    localStorage.setItem('checked', 'estilo1');

    localStorage.setItem('logo', 'assets/img/logo-bw.png');
    localStorage.setItem('menu', 'assets/img/show-nav-bw.png');

    localStorage.setItem('font', '"Comfortaa", sans-serif');

    localStorage.setItem('background', '#e5e5e5');
    localStorage.setItem('container-color', '#ffffff');
    localStorage.setItem('text-color', '#464655');
    localStorage.setItem('text-background', '#d1d1d1');
    localStorage.setItem('primary', '#82b9ff');
    localStorage.setItem('secondary', '#ff6464');
    localStorage.setItem('tertiary', '#ffcd46');
  }

  loadPalette();
}

function estiloRadioSelected() {
  var estilo1 = document.getElementById('estilo-1');
  var estilo2 = document.getElementById('estilo-2');

  if (estilo1 && estilo2 && localStorage.getItem('checked') == 'estilo1') {
    estilo1.checked = true;
  } else if (
    estilo1 &&
    estilo2 &&
    localStorage.getItem('checked') == 'estilo2'
  ) {
    estilo2.checked = true;
  }
}

function mostrarJogos(className) {
  var i = 0;

  var jogos = document.getElementsByClassName(className);

  var clock = setInterval(function () {
    jogos[i].classList.add('mostrar');
    i++;
    if (i >= jogos.length) {
      clearInterval(clock);
    }
  }, 0);
}

function setDisplay(className, displayValue) {
  var jogos = document.getElementsByClassName(className);
  for (var i = 0; i < jogos.length; i++) {
    jogos[i].style.display = displayValue;
  }
}

function destaques() {
  setDisplay('jogo', 'block');
  mostrarJogos('jogo');
}

function lancamentos() {
  setDisplay('jogo', 'none');
  setDisplay('lanc', 'block');
}

function gratuitos() {
  setDisplay('jogo', 'none');
  setDisplay('grat', 'block');
}

function myItems() {
  setDisplay('jogo', 'none');
  setDisplay('my-it', 'block');
}

function favoritos() {
  setDisplay('jogo', 'none');
  setDisplay('fav', 'block');
}

function desejados() {
  setDisplay('jogo', 'none');
  setDisplay('desej', 'block');
}
