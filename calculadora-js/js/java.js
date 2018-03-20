
   
  function somar(a, b) {
    return a + b;
  }
  function subtrair(a, b) {
    return a - b;
  }
  function multiplicar(a, b) {
    return a * b;
  }
  function dividir(a, b) {
    return a / b;
  }

function calculadora() {
    var valor1 = parseInt(prompt('Digite o primeiro número: '))
    var valor2 = parseInt(prompt('Digite o segundo número: '))
    alert('A + B: ' + somar(valor1, valor2) + '\n' +
    'A - B: ' + subtrair(valor1, valor2) + '\n' +
    'A * B: ' + multiplicar(valor1, valor2) + '\n' +
    'A / B: ' + dividir(valor1, valor2).toFixed(2));
  }