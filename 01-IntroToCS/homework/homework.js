'use strict';

function BinarioADecimal(num) {
   let suma = 0;
   for (let i=0;i<numero.length; i++ ) {

      suma += +numero[i] *2 ** (numero.length - 1 - i);
      
   }
  return suma;

}

function DecimalABinario(num) {

   let numero = num;
   let binario = (numero%2).toString();

   for (;numero > 1;){
      numero = parseInt(numero/2);
      binario = (numero%2) + (binario);

   }
   return binario;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
