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

var botao = document.getElementById('btn-invest');
var totalinvest = document.getElementById('num-invest');
var cont = 0;
    
botao.addEventListener('click', clicou);

function clicou(){
  if (cont!=0) {
    botao.innerHTML = `Você já investitiu`;
  }
  else {
    totalinvest.innerHTML = `5000`;
    cont ++;
  }
}
