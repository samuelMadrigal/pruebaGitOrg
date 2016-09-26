//Archivo javascript

function saludo() {
  var cadena='Samuel';
  alert('Hola ' + cadena);
};

function saludo2(texto) {
  alert('Hola ' + texto);
};

function operacion() {
  var numero1=0;
  var numero2=0;
  var resultado=0;

  numero1=prompt('Introduce numero');
  numero2=prompt('Introduce numero');

resultado = parseInt(numero1) + parseInt(numero2);
  alert(numero1 + ' + ' + numero2 + ' es igual a ' + resultado);

resultado = parseInt(numero1) - parseInt(numero2);
  alert(numero1 + ' - ' + numero2 + ' es igual a ' + resultado);

resultado = parseInt(numero1) / parseInt(numero2);
  alert(numero1 + ' / ' + numero2 + ' es igual a ' + resultado);

resultado = parseInt(numero1) % parseInt(numero2);
  alert(numero1 + ' % ' + numero2 + ' es igual a ' + resultado);
};

function tablaMultiplicar() {
  var numero=prompt('Introduce numero');
var resultado="";
  for (var i = 1; i <= 10; i++) {
    resultado = resultado + i + ' x ' + numero + ' = ' + i*numero + '\n';
  }
alert(resultado);
};
