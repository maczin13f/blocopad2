function carregarNotas() {
const salvaDados = JSON.parse(localStorage.getItem('notassalvas')) || [];

salvaDados.forEach(texto => {
    const criarNovoP = document.createElement('p');
    criarNovoP.textContent = texto;
    notasSalvas.appendChild(criarNovoP);
  });
}

function removeCache() {
    localStorage.removeItem('notassalvas');
    window.location.reload()
}

const nomeSalvoCache = JSON.parse(localStorage.getItem('nomesalvo')) || [];

userProfile.innerHTML = `<span class="firstLetter">${nomeSalvoCache}</span>`;

carregarNotas()
