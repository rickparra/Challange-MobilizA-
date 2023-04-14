let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById('menu2');
let menu3 = document.getElementById('menu3');

// adiciona um event listener para quando o mouse passar sobre o texto
menu1.addEventListener('mouseover', function() {
 menu1.style.fontWeight = 'bold'; // faz o texto ficar em negrito
 menu1.style.color = 'red';

});

// adiciona um event listener para quando o mouse sair do texto
menu1.addEventListener('mouseout', function() {
 menu1.style.fontWeight = 'normal'; // volta o texto ao estilo normal
 menu1.style.color = 'white';
});

// adiciona um event listener para quando o mouse passar sobre o texto
menu2.addEventListener('mouseover', function() {
    menu2.style.fontWeight = 'bold'; // faz o texto ficar em negrito
    menu2.style.color = 'red';
   
});
   
   // adiciona um event listener para quando o mouse sair do texto
menu2.addEventListener('mouseout', function() {
    menu2.style.fontWeight = 'normal'; // volta o texto ao estilo normal
    menu2.style.color = 'white';
});
   
// adiciona um event listener para quando o mouse passar sobre o texto
menu3.addEventListener('mouseover', function() {
    menu3.style.fontWeight = 'bold'; // faz o texto ficar em negrito
    menu3.style.color = 'red';
   
});
   
   // adiciona um event listener para quando o mouse sair do texto
menu3.addEventListener('mouseout', function() {
    menu3.style.fontWeight = 'normal'; // volta o texto ao estilo normal
    menu3.style.color = 'white';
});
   
      