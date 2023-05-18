// Obtém referências aos elementos do HTML
const fotoInput = document.getElementById('foto-input');
const mudarFotoBtn = document.getElementById('mudar-foto');
const avatarDiv = document.querySelector('.avatar');

// Adiciona um ouvinte de evento para o botão de mudar foto
mudarFotoBtn.addEventListener('click', () => {
  fotoInput.click(); // Simula o clique no input de foto
});

// Ouve o evento de mudança no input de foto
fotoInput.addEventListener('change', (event) => {
  const file = event.target.files[0]; // Obtém o arquivo selecionado

  // Cria um objeto URL para representar a imagem selecionada
  const imageUrl = URL.createObjectURL(file);

  // Atualiza a imagem do avatar com a nova foto
  avatarDiv.style.backgroundImage = `url('${imageUrl}')`;
});
