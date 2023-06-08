var botao = document.getElementById('btn-invest');
var totalinvest = document.getElementById('num-invest');
var cont = 0;

botao.addEventListener('click', clicou);

function validarEmail() {
  var emailInput = document.querySelector('.input-email');
  var email = emailInput.value;
  var emailRegex = /\S+@\S+\.\S+/;

  if (emailRegex.test(email)) {
    alert("Seu e-mail foi cadastrado, muito obrigado!");
  } else {
    alert("Por favor, insira um e-mail válido.");
  }
}

function validarEmailIndex() {
  var emailInput = document.querySelector('.input-email-index');
  var email = emailInput.value;
  var emailRegex = /\S+@\S+\.\S+/;

  if (emailRegex.test(email)) {
    alert("Seu e-mail foi cadastrado, muito obrigado!");
  } else {
    alert("Por favor, insira um e-mail válido.");
  }

}

function clicou() {
  if (cont != 0) {
    alert("Você já faz parte dos nossos investidores! Obrigado!")
  }
  else {
    totalinvest.innerHTML = `5000`;
    cont++;
    botao.innerHTML = `Obrigado pelo Apoio!`;
  }
}

/* function autoCarousel() {
  // Obtém a referência para o carrossel
  const carousel = document.querySelector('#carouselExampleFade');

  // Verifica se o carrossel existe
  if (carousel) {
    // Define o intervalo de tempo em milissegundos (por exemplo, 3 segundos)
    const interval = 3000;

    // Função para avançar para o próximo slide
    const nextSlide = () => {
      const activeSlide = carousel.querySelector('.carousel-item.active');
      const next = activeSlide.nextElementSibling || carousel.firstElementChild;
      activeSlide.classList.remove('active');
      next.classList.add('active');
    };

    // Chama a função nextSlide a cada intervalo de tempo
    setInterval(nextSlide, interval);
  }
}

// Chama a função para iniciar o carrossel automático
autoCarousel(); */






