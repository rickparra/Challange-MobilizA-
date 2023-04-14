document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); // selecione o formulário
    const usernameInput = document.querySelector('input[type="text"]'); // selecione o input de username
    const passwordInput = document.querySelector('input[type="password"]'); // selecione o input de senha
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // evite que o formulário seja enviado
      const usernameValue = usernameInput.value.trim(); // pegue o valor do input de username
      const passwordValue = passwordInput.value.trim(); // pegue o valor do input de senha
  
      if (usernameValue === '' || passwordValue === '') { // verifique se os campos estão vazios
        alert('Por favor, preencha todos os campos!'); // exiba uma mensagem de erro
      } else {
        alert('Formulário enviado com sucesso!'); // exiba uma mensagem de sucesso
        form.reset(); // limpe o formulário
      }
    });
  });
  