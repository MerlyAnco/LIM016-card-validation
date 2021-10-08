const validator = {
  isValid: function (numeroTarjeta){
    let numeros = Array.from(numeroTarjeta).map(Number).reverse();
    //let numeros = Array.numeroTarjeta[]

    let sumarDigitos=0;

    for(let i = 0; i < numeros.length; i++) {
      if(i%2===1){ //posicion impar
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
    return sumarDigitos%10==0;
    
    },

//reemplazar numeros con *

  maskify: function(numeroTarjeta){
    let digitos = [];
    for(let i = 0; i < numeroTarjeta.length;i++){
        if(i<numeroTarjeta.length-4){
        digitos.push("#");
        }
        else{
        digitos.push(numeroTarjeta[i]);
        }
    }
    return digitos.join("");
    }

}


export default validator;
