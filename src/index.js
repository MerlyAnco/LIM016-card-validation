import validator from './validator.js';

const boxNumber = document.querySelector("#formularioTotal")
    

//pasar de pagina 1 a pagina 2

document.getElementById("btn2").addEventListener("click", ()=>{
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina2").style.display="block"
});

//Pasar de pagina 2 a pagina 3

document.getElementById("paso2").addEventListener("click",()=>{
    document.getElementById("pagina2").style.display="none";
    document.getElementById("pagina3").style.display="block"
    ;});

//No dejar que se escriban letras en las caja de numero de tarjeta 

boxNumber.inputNumber.addEventListener("keyup", (e)=>{
    let valorNumero = e.target.value;

    boxNumber.inputNumber.value=valorNumero
    //Eliminando espacios en blanco
    .replace(/\s/g, "")
    //Eliminando letras
    .replace(/\D/g, "")
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
    let numeroTarjeta = creditNumberCard.value;
    
    if(validator.isValid(numeroTarjeta)){
        console.log(validator.isValid(numeroTarjeta));
        console.log("la tarjeta es valida");
        console.log(validator.maskify(numeroTarjeta)) 
    }
    else{
        console.log(validator.isValid(numeroTarjeta));
        console.log("la tarjeta no es valida");
        console.log(validator.maskify(numeroTarjeta))
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
