//Archivo javascript

function empezar1() {
  var numero=0;
  var resultado="";

  numero=prompt("Introduce un número:");

  if(parseInt(numero)%5==0){ //si modulo de 5
    for(var i = 1; i <= 6; i++){
      numero=parseInt(numero)+5;
      if(i==6){
        resultado=resultado + numero;
      }else{
        resultado=resultado + numero + " - ";
      }
    }
  }else{ //si no modulo de 5
    for (var i = 1; i <= 10; i++) {
      resultado = resultado + i + ' x ' + numero + ' = ' + i*numero + '</br>';
    }
  }

  document.write(resultado);
};

function empezar2() {

  var numero1=0;
  var numero2=0;
  var operacion="";
  var resultado=0;

  operacion=prompt("Introduce la operación:");

  while(operacion!='x'){
    numero1=prompt("Introduce un número:");
    numero2=prompt("Introduce otro número:");

      switch(operacion){
        case "+":  resultado=parseInt(numero1)+parseInt(numero2);
                break;
        case "-":  resultado=parseInt(numero1)-parseInt(numero2);
                break;
        case "*":  resultado=parseInt(numero1)*parseInt(numero2);
                break;
        case "/":  resultado=parseInt(numero1)/parseInt(numero2);
                break;
        default:  resultado='error';
      };
      alert(resultado);
      operacion=prompt("Introduce la operación:");
  };

  if (operacion=='x') {
    resultado='adios';
    alert(resultado);
  };
};

function empezar3() {
  document.write("<table style='border-collapse: collapse;'>");
  for (var i = 0; i < 100; i++) {
    if (i%2!=0 ) {
      document.write("<tr><td style='border:1px solid black;'>"+i+"</td></tr>");
    };
  };
  document.write("</table>");
};

function empezar4() {
document.write("<table style='border-collapse: collapse;'>");
  numero1=0;
  numero1=prompt("Introduce un número:");

  if (numero1%2==0) {
    par(numero1);
  }else{
    impar(numero1);
  };
};

function par(num) {
  for (var i = 0; i < 45; i++) {
    num=(parseInt(num)+2);
    document.write("<tr><td style='border:1px solid black;'>"+num+"</td></tr>");
  };
};
function impar(num) {
  for (var i = 0; i < 50; i++) {
    num=(parseInt(num)+2);
    document.write("<tr><td style='border:1px solid black;'>"+num+"</td></tr>");
  };
};


function empezar5() {
  var num=0;
  var mayor="";
  var menor="";
  var cadena="";

  num=prompt("Introduce un número:");
  mayor=num;
  menor=num;
  cadena=num;

  for (var i = 0; i < 4; i++) {
    num=prompt("Introduce un número:");
    if (parseInt(mayor)<=parseInt(num)) {
      mayor=num;
      cadena=cadena+" "+num;
    };
    if (parseInt(menor)>parseInt(num)) {
      menor=num;
      cadena=num+" "+cadena;
    };
  };

  document.write("Mayor: "+mayor+"</br>");
  document.write("Menor: "+menor+"</br>");
  document.write(cadena);
};

function empezar6() {
  var cadena="";
  var numVoc=0;
  var numCon=0;
  var numA=0;
  var numE=0;
  var numI=0;
  var numO=0;
  var numU=0;
  var numEs=0;

  cadena=prompt("Introduce tu nombre completo:");

  for (var i = 0; i < cadena.length; i++) {
    switch (cadena[i]) {
      case 'a': numVoc=parseInt(numVoc)+1; numA=parseInt(numA)+1;
        break;
      case 'e': numVoc=parseInt(numVoc)+1; numE=parseInt(numE)+1;
        break;
      case 'i': numVoc=parseInt(numVoc)+1; numI=parseInt(numI)+1;
        break;
      case 'o': numVoc=parseInt(numVoc)+1; numO=parseInt(numO)+1;
        break;
      case 'u': numVoc=parseInt(numVoc)+1; numU=parseInt(numU)+1;
        break;
      case ' ': numEs=parseInt(numEs)+1;
        break;
      default:;
    }
  }

  numCon=cadena.length+parseInt(numVoc)-parseInt(numEs);

  document.write(cadena+"</br>");
  document.write("a: "+numA+"</br>");
  document.write("e: "+numE+"</br>");
  document.write("i: "+numI+"</br>");
  document.write("o: "+numO+"</br>");
  document.write("u: "+numU+"</br>");
  document.write("Vocales: "+numVoc+"</br>");
  document.write("Consonantes: "+numCon+"</br>");
};
