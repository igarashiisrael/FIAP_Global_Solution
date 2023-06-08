var botao = document.getElementById('btn-invest');
var totalinvest = document.getElementById('num-invest');
var cont = 0;
const telefoneInput = document.querySelector('.valida-telefone');
telefoneInput.addEventListener('input', formatarTelefone);



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

function validarTelefone() {
  const telefoneInput = document.querySelector('.valida-telefone');
  const telefone = telefoneInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  const ddd = telefone.slice(0, 2);
  const numero = telefone.slice(2);

  const telefoneFormatado = `(${ddd}) ${numero}`;

  if (!telefone) {
    return;
  }
  if (telefone.length !== 11 || isNaN(telefone)) {
    alert('Digite um número de telefone válido!');
    return;
  } else { alert('Telefone cadastrado com sucesso!') }
}

function formatarTelefone() {
  const telefone = telefoneInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  const ddd = telefone.slice(0, 2);
  const primeiraParte = telefone.slice(2, 7);
  const segundaParte = telefone.slice(7);

  let telefoneFormatado = `(${ddd}) ${primeiraParte}`;

  if (segundaParte) {
    telefoneFormatado += `-${segundaParte}`;
  }

  telefoneInput.value = telefoneFormatado;
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
