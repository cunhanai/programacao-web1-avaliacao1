/* 
    Adiciona o cabeçalho em todas as páginas.

    Caso seja necessário fazer alterações no html, coloca ele em alguma página (para ficar mais fácil de editar) e comenta esse código.

    Depois que o código estiver pronto, cola o conteúdo do header aqui dentro novamente.

    Faça a mesma coisa com o rodapé.
*/

document.addEventListener('DOMContentLoaded', () => {
  let header = document.getElementById('header-dinamica')

  header.classList.add('container')

  header.innerHTML = `
    <div id="logotipo">
        <a href="index.html">
            <img
                id="logotipo"
                src="assets/img/logo-128px.png"
                alt="Logo flat do site contendo um controle de videogame cinza com o botões nas cores amarelo, vermelho e azul claro."
            />  
        </a>
    </div>
    <div id="usuario-info">
        <p id="usuario-info__login">Gabriel Cestari</p>
        <img
            id="usuario-info__picture"
            src="assets/img/icon-user.png"
            alt="Ícone de usuário padrão com a representação abstrata de uma pessoa em formas geométricas do peito para cima em escala de cinza"
        />
    </div>`

  document.body.appendChild(header)
})
