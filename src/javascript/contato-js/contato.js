const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.querySelector('.name').value;
  const email = form.querySelector('.email').value;
  const message = form.querySelector('.message').value;

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Aqui você pode inserir o código para enviar o formulário
  // Após o envio, exiba uma mensagem de confirmação ao usuário
  alert('O formulário foi enviado com sucesso!');
  
  // Limpa os campos do formulário após o envio
  form.querySelector('.name').value = '';
  form.querySelector('.email').value = '';
  form.querySelector('.message').value = '';
});
