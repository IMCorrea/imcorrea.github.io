function formatarTelefone(input) {
  let numero = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  let padrao = /^(\d{2})(\d{5})(\d{4})$/; // Define o padrão (XX) XXXXX-XXXX

  if (padrao.test(numero)) {
    input.value = numero.replace(padrao, "($1) $2-$3"); // Aplica o formato (XX) XXXXX-XXXX
  } else {
    input.value = numero; // Se o número não corresponder ao padrão, mantém o número como está
  }
}
