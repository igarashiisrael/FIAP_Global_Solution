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
