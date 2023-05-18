// Dados das denúncias
var denuncias = [
    { lat: -23.5523, lng: -46.6316, titulo: 'Denúncia 1', descricao: 'Descrição da Denúncia 1' },
    { lat: -23.5498, lng: -46.6355, titulo: 'Denúncia 2', descricao: 'Descrição da Denúncia 2' },
    { lat: -23.5539, lng: -46.6383, titulo: 'Denúncia 3', descricao: 'Descrição da Denúncia 3' },
    { lat: -23.5512, lng: -46.6341, titulo: 'Denúncia 4', descricao: 'Descrição da Denúncia 4' },
    { lat: -23.5491, lng: -46.6368, titulo: 'Denúncia 5', descricao: 'Descrição da Denúncia 5' },
    { lat: -23.5547, lng: -46.6329, titulo: 'Denúncia 6', descricao: 'Descrição da Denúncia 6' }
  ];
  
  // Script para carregar o mapa e as denúncias
  function initMap() {
    // Criar um mapa
    const map = L.map('map').setView([-23.5505, -46.6333], 14); // Coordenadas do centro do mapa e nível de zoom
  
    // Adicionar uma camada de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);
    
    // Exibir denúncias no mapa
    denuncias.forEach(function(denuncia) {
      L.marker([denuncia.lat, denuncia.lng]).addTo(map)
        .bindPopup(denuncia.titulo)
        .on('click', function() {
          exibirDetalhesDenuncia(denuncia);
        });
    });
  }
  
  // Função para exibir detalhes da denúncia no pop-up
  function exibirDetalhesDenuncia(denuncia) {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContainer = document.getElementById('popup-container');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
  
    popupTitle.textContent = denuncia.titulo;
    popupDescription.textContent = denuncia.descricao;
  
    popupOverlay.style.display = 'block';
    popupContainer.style.display = 'block';
  }
  
  // Função para fechar o pop-up
  function fecharPopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContainer = document.getElementById('popup-container');
  
    popupOverlay.style.display = 'none';
    popupContainer.style.display = 'none';
  }
  
  // Chamar a função para inicializar o mapa
  initMap();
  
  // Exemplo de dados das denúncias
  const denunciasLista = [
    {
      id: 1,
      descricao: 'Denúncia de Roubo',
      localizacao: {
        latitude: 123,
        longitude: 456,
      },
    },
    {
      id: 2,
      descricao: 'Denúncia de Lixo na Rua',
      localizacao: {
        latitude: 789,
        longitude: 012,
      },
    },
    {
      id: 3,
      descricao: 'Denúncia de Buraco na Rua',
      localizacao: {
        latitude: 345,
        longitude: 678,
      },
    },
    {
      id: 4,
      descricao: 'Denúncia de Barulho Excessivo',
      localizacao: {
        latitude: 901,
        longitude: 234,
      },
    },
    {
      id: 5,
      descricao: 'Denúncia de Vandalismo',
      localizacao: {
        latitude: 567,
        longitude: 890,
      },
    },
    {
      id: 6,
      descricao: 'Denúncia de Iluminação Pública',
      localizacao: {
        latitude: 123,
        longitude: 456,
      },
    }
  ];
  
  // Função para renderizar as denúncias na lista
  function renderizarDenuncias() {
    const denunciasList = document.getElementById('denuncias-list');
    denunciasList.innerHTML = ''; // Limpa a lista antes de renderizar novamente
  
    denunciasLista.forEach((denuncia) => {
      const item = document.createElement('li');
      item.textContent = denuncia.descricao;
  
      item.addEventListener('click', function() {
        exibirDetalhesDenuncia(denuncia);
      });
  
      denunciasList.appendChild(item);
    });
  }
  
  // Chama a função para renderizar as denúncias inicialmente
  renderizarDenuncias();
  
  // Evento para fechar o pop-up ao clicar no botão "Fechar"
  document.getElementById('popup-close').addEventListener('click', fecharPopup);
  