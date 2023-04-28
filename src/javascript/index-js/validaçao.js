const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');

signInForm.addEventListener('submit', function(event) {
  const username = signInForm.querySelector('input[type="text"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  if (!username || !password) {
    event.preventDefault();
    alert('Por favor, preencha todos os campos.');
  } else {
    alert('Formulário enviado com sucesso!');
  }
});

signUpForm.addEventListener('submit', function(event) {
  const username = signUpForm.querySelector('input[type="text"]').value;
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;

  if (!username || !email || !password) {
    event.preventDefault();
    alert('Por favor, preencha todos os campos.');
  } else {
    alert('Formulário enviado com sucesso!');
  }
});
