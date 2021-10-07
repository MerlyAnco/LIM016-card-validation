const validator = {
  isValid: function (numeroTarjeta){
    let numeros = Array.from(numeroTarjeta).map(Number);
    //let numeros = Array.numeroTarjeta[]

    let sumarDigitos=0;

    for(let i = 0; i < numeros.length; i++) {
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
    return sumarDigitos;
    
    },

//reemplazar numeros con *

  maskify: function(numeroTarjeta){
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

}


export default validator;
