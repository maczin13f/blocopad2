const menu = document.getElementById('menu');

menu.innerHTML = `
<img src="imagens/logo.png" id="logoimg">
    <nav>
        <a href="notas.html"><img src="imagens/notas.png"></a>
        <a href="notas.html#fav"><img src="imagens/fav.png"></a>
        <a href="config.html"><img src="imagens/config.png"></a>
        <div id="userProfile"><img src='imagens/perfil.png'></div>
    </nav>
`;

const inputNota = document.querySelector('.digitarNota');
const notasSalvas = document.querySelector('.notassalvas');
const btnCriaNotas = document.getElementById('btnCriaNota');
const btnCriaNotasVolta = document.getElementById('btnCriaNotaVolta');
const userProfile = document.getElementById('userProfile');
const inputNome = document.getElementById('inputNome');
const cadastroDiv = document.querySelector('.cadastro');
const btnSalvaNome = document.getElementById('btnCadastroConfirma');

// Função para alternar entre criar notas e exibir as notas salvas
function criarNota() {
  if (inputNota.style.display === 'none') {
    notasSalvas.style.display = 'none';
    inputNota.style.display = '';
    btnCriaNotas.style.display = 'none';
    btnCriaNotasVolta.style.display = '';
  } else if (notasSalvas.style.display === 'none') {
    inputNota.style.display = 'none';
    notasSalvas.style.display = '';
    btnCriaNotas.style.display = '';
    btnCriaNotasVolta.style.display = 'none';
  }
}

// Exibir cadastro ao clicar no perfil do usuário
userProfile.addEventListener('click', function () {
  document.querySelector('main').style.filter = 'blur(5px)';
  cadastroDiv.style.display = '';
});

// Salvar o nome e mostrar a primeira letra no perfil
btnSalvaNome.addEventListener('click', function () {
  document.querySelector('main').style.filter = '';
  cadastroDiv.style.display = 'none';

  const inputNomeValor = inputNome.value; // Atualiza o valor a cada clique
  const nomeFirstLetra = inputNomeValor[0].toUpperCase(); // Garante que a letra seja maiúscula

  console.log(nomeFirstLetra); // Apenas para depuração

  // Altera o conteúdo do perfil para exibir a primeira letra
  // Usamos innerHTML para manipular o conteúdo HTML diretamente
  userProfile.innerHTML = `<span class="firstLetter">${nomeFirstLetra}</span>`;

  // Optional: Adicionar estilos para centralizar a letra sobre a imagem, por exemplo:
  userProfile.style.position = 'relative';
  const span = userProfile.querySelector('.firstLetter');
  span.style.position = 'absolute';
  span.style.top = '50%';
  span.style.left = '50%';
  span.style.transform = 'translate(-50%, -50%)';
  span.style.fontSize = '20px'; // Tamanho da letra
  span.style.fontWeight = 'bold'; // Tornar a letra mais visível
});
