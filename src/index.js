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
const boxNumber = document.querySelector("#formularioTotal")

boxNumber.inputNumber.addEventListener("keyup", (e)=>{
    let valorNumero = e.target.value;

    boxNumber.inputNumber.value=valorNumero
    //Eliminando espacios en blanco
    .replace(/\s/g, "")
    //Eliminando letras
    .replace(/\D/g, "")
});




//conseguir elementos para validar la tarjeta
const creditNumberCard = document.querySelector("#inputNumber");

const btnPagar = document.querySelector("#btnDatos")

function validar(){
    let numeroTarjeta = creditNumberCard.value

    if(numeroTarjeta==""){
        alert("ingrese un numero de tarjeta");
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


//console.log(validator);
