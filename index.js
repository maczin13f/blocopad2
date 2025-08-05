const menu = document.getElementById('menu');

menu.innerHTML = `
<img src="imagens/logo.png" id="logoimg">
<hr class='divisoria'>
    <nav>
        <label onclick='paginaInicial()'><img src="imagens/notas.png"></label>
        <a href="notas.html#fav"><img src="imagens/fav.png"></a>
        <div id="userProfile"><img src='imagens/perfil.png'></div>
    </nav>
`;

const inputNota = document.querySelector('.digitarNota');
const notasDiv = document.querySelector('.notassalvas');
const btnCriaNotas = document.getElementById('btnCriaNota');
const btnCriaNotasVolta = document.getElementById('btnCriaNotaVolta');
const userProfile = document.getElementById('userProfile');
const inputNome = document.getElementById('inputNome');
const cadastroDiv = document.querySelector('.cadastro');
const btnSalvaNome = document.getElementById('btnCadastroConfirma');
const input = document.getElementById('input');
const notasSalvas = document.getElementById('notasCriadas');

function criarNota() {
  if (inputNota.style.display === 'none') {
    notasDiv.style.display = 'none';
    inputNota.style.display = '';
    btnCriaNotas.style.display = 'none';
    btnCriaNotasVolta.style.display = '';
  }
}

function salvaNota() {
  const inputValue = input.value.trim()
  const criarNovoP = document.createElement('p');
  if (!inputValue) return;
  criarNovoP.textContent = input.value;

  const salvaDados = JSON.parse(localStorage.getItem('notassalvas')) || [];
  
salvaDados.push(inputValue);
localStorage.setItem('notassalvas', JSON.stringify(salvaDados));

input.value = ''

notasSalvas.appendChild(criarNovoP)
}

// Exibir cadastro ao clicar no perfil do usuário
userProfile.addEventListener('click', function () {
  document.querySelector('main').style.filter = 'blur(5px)';
  cadastroDiv.style.display = '';
});

input.addEventListener('keydown', function(eventEnter){
  if (eventEnter.key === 'Enter') {
  salvaNota()
  }
})


btnSalvaNome.addEventListener('click', function () {
  document.querySelector('main').style.filter = '';
  cadastroDiv.style.display = 'none';

  const inputNomeValor = inputNome.value; 
  const nomeFirstLetra = inputNomeValor[0].toUpperCase(); 

  console.log(nomeFirstLetra);


  userProfile.innerHTML = `<span class="firstLetter">${nomeFirstLetra}</span>`;

  const span = userProfile.querySelector('.firstLetter');

  localStorage.setItem('nomesalvo', JSON.stringify(nomeFirstLetra));

});

function paginaInicial() {
  notasDiv.style.display = ''
  inputNota.style.display = 'none'
  btnCriaNotas.style.display = '';
    btnCriaNotasVolta.style.display = 'none';
    window.location.reload()
}
