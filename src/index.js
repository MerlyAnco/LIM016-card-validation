import validator from './validator.js';

const boxNumber = document.querySelector("#formularioTotal")
    

//pasar de pagina 1 a pagina 2

document.querySelector(".btn1").addEventListener("click", ()=>{
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina3").style.display="block"
});


boxNumber.inputNumber.addEventListener("keyup", (e)=>{
    let valorNumero = e.target.value;

    boxNumber.inputNumber.value=valorNumero
    //Eliminando espacios en blanco
    .replace(/\s/g, "")
    //Eliminando letras
    .replace(/\D/g, "")
    //agrupando cada 4 
    .replace(/([0-9]{4})/g, '$1 ')
    //quitando ultimo espacios 
    .trim()
});

//No dejar que se escriban numeros en titular de la tarjeta

boxNumber.name.addEventListener("keyup", (e)=>{
    let valorNombre = e.target.value;

    boxNumber.name.value=valorNombre
    //Eliminando numeros
    .replace(/\d/g, "")
});

//No dejar que en CVV se escriba letras
boxNumber.cvv.addEventListener("keyup", (e)=>{
    let valorCvv = e.target.value;

    boxNumber.cvv.value=valorCvv
    //Eliminando espacios en blanco
    .replace(/\s/g, "")
    //Eliminando letras
    .replace(/\D/g, "")
    
});


//conseguir elementos para validar la tarjeta
const creditNumberCard = document.querySelector("#inputNumber");

const btnPagar = document.querySelector("#btnDatos")

function validar(){
    let numeroTarjeta = creditNumberCard.value.replace(/\s/g, "");
    let cifrado = validator.maskify(numeroTarjeta)
    let tipoTarjeta = validator.tarjetType(numeroTarjeta)

    if(numeroTarjeta==""){
        alert("Por favor ingrese un numero de tarjeta")
    }
    else if (validator.isValid(numeroTarjeta)){
        document.getElementById("logo").innerHTML=tipoTarjeta;
        document.getElementById("maskifyTarjeta").innerHTML = "La tarjeta que termina en " + cifrado;
        document.getElementById("validatorTarjeta").style.color="rgb(14,158,55)";
        document.getElementById("validatorTarjeta").innerHTML="ES VALIDA";
        document.getElementById("pagina3").style.display="none";
        document.getElementById("resultado").style.display="block";
    }
    else{
        alert("la tarjeta que ingreso no es valida, por favor verifique de nuevo")
        /*
        document.getElementById("validatorTarjeta").style.color= "rgb(255,99,71)";
        document.getElementById("validatorTarjeta").innerHTML="NO ES VALIDA";
        document.getElementById("pagina3").style.display="none";
        document.getElementById("resultado").style.display="block";
        document.getElementById("logo").style.display="none"*/
    }
}

btnPagar.addEventListener("click",validar);


/*
let datos = function(){
    let name = document.getElementById("name").value;
    let numberCard = document.getElementById("number_card").value;
    console.log(name + numberCard)
}

document.getElementById("btnDatos").addEventListener("click",datos);*/


//console.log(validator)
