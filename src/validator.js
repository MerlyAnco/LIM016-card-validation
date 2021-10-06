const validator = {
  function(numeroTarjeta){
    let numeros = Array.numeroTarjeta.toString().split(',').map(Number);
    
    let sumarDigitos=0;
    for(i = 0; i < numeros.length; i++) {
      if(i%2===0){ //posicion impar
        if((numeros[i]*2)>=10){
          numeros[i]=numeros[i]*2-9;
        }
        else{
          numeros[i]=numeros[i]*2;
        }
      }
      else{ //posicion par
        numeros[i];
      }
      sumarDigitos = sumarDigitos + numeros[i];
    }

  }
}

function numerosOcultos(numeroTarjeta){
  let digitos = [];
  for(let i = 0; i < numeroTarjeta.length;i++){
    if(i<numeroTarjeta.length-4){
      digitos.push("*");
    }
    else{
      digitos.push(numeroTarjeta[i]);
    }
  }
  return digitos.join("");
}


export default validator;
