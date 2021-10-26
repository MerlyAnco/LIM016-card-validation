import validator from './validator.js';

const boxNumber = document.querySelector("#formularioTotal")
    
/*FUNCIONAMIENTO DEL CAROUSEL
const carrousel = document.querySelector(".carrousel");
const producto = document.querySelectorAll(".producto");

const flechaIzquierda= document.getElementById("flecha-izquierda");
const flechaDerecha= document.getElementById("flecha-derecha");

//.................evento para flecha..........
flechaDerecha.addEventListener("click",()=>{
    carrousel.scrollLeft += carrousel.offsetWidth;
});*/


/*pasar de pagina 1 a pagina 2

document.querySelector("#comprar1").addEventListener("click", ()=>{
    document.getElementById("pagina1").style.display="none";
    document.querySelector(".informacion").style.display="block"
});*/

//PASAR A DATOS RESUMIDOS DE INFORMACIÓN
let email=document.querySelector("#correoElectronico")
let direccion=document.querySelector("#direccion")
let departamento = document.querySelector("#departamento")
let provincia = document.querySelector("#provincia")
let distrito = document.querySelector("#distrito")

const enviarInformacion=document.querySelector("#enviarInformacion")

function enviarInfo(){
    document.querySelector(".informacionDeContacto").style.display="none";
    document.querySelector(".informationTable").style.display="block";
    document.querySelector(".envio").style.display="block";
    document.querySelector("#mail").innerHTML= email.value;
    document.querySelector("#direccionFinal").innerHTML= direccion.value+", "+distrito.value+", "+provincia.value+ ", "+departamento.value
    //document.querySelector("#direccionFinal").innerHTML= direccion + " " + distrito + " " + provincia + " " + departamento 
}

enviarInformacion.addEventListener("click",enviarInfo)

//CREANDO CARRITO DE COMPRAS

//------------producto1--------------

document.querySelector("#comprar1").addEventListener("click", ()=>{

    let precio= "S/38.00"

    document.querySelector(".productoF").innerHTML= '<img src="img/product1.jpg" />'
    document.querySelector(".nombreDelProducto").innerHTML="ACWELL" + "<br>" + "Licorice pH Balancing Advance Serum"
    document.querySelector(".precioElegido").innerHTML=precio
    document.querySelector(".envioElegido").innerHTML="Se calculara en el siguiente paso"
    document.querySelector(".total").innerHTML= precio
    document.querySelector(".informacionDeContacto").style.display="block";  
    document.querySelector(".productoElegidos").style.display="block";
    document.querySelector("#pagina1").style.display="none";

});

//MOSTRAR EL DATO DE ENVIO ELEGIDO
document.getElementById("Estandar").addEventListener("click",()=>{
    document.querySelector(".envioElegido").innerHTML="<p>S/10.00</p>";
    document.querySelector(".total").innerHTML= "S/48.00"
})

document.getElementById("Recojo").addEventListener("click",()=>{
    document.querySelector(".envioElegido").innerHTML="<p>S/00.00</p>"
    document.querySelector(".total").innerHTML= "S/38.00"
})

//------------------------------producto 2---------------------------

document.querySelector("#comprar2").addEventListener("click", ()=>{

    let precio= "S/80.00"

    document.querySelector(".productoF").innerHTML= '<img src="img/product2.jpg" />'
    document.querySelector(".nombreDelProducto").innerHTML="SATURDAY SKIN" + "<br>" + "Mascarilla para dormir con vitamina C de Yuzu"
    document.querySelector(".precioElegido").innerHTML=precio
    document.querySelector(".envioElegido").innerHTML="Se calculara en el siguiente paso"
    document.querySelector(".total").innerHTML= precio
    document.querySelector(".informacionDeContacto").style.display="block";  
    document.querySelector(".productoElegidos").style.display="block";
    document.querySelector("#pagina1").style.display="none";

});

//MOSTRAR EL DATO DE ENVIO ELEGIDO
document.getElementById("Estandar").addEventListener("click",()=>{
    document.querySelector(".envioElegido").innerHTML="<p>S/10.00</p>";
    document.querySelector(".total").innerHTML= "S/90.00"
})

document.getElementById("Recojo").addEventListener("click",()=>{
    document.querySelector(".envioElegido").innerHTML="<p>S/00.00</p>"
    document.querySelector(".total").innerHTML= "S/80.00"
})

//PASAR A LA PAGINA DE PAGO
const continuarPago = document.querySelector("#continuarPago");

function continuar_pago(){
    document.querySelector(".envio").style.display="none"
    document.querySelector(".cuadroDeFormulario").style.display="block"
}

continuarPago.addEventListener("click",continuar_pago);

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
    .trim();

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
//IDENTIFICAR EL TIPO DE TARJETA INGRESADO

boxNumber.inputNumber.addEventListener("keyup",()=>{

    let valorNumero = document.getElementById("inputNumber").value;
    

    if (valorNumero.charAt(0)==4){
        
        document.querySelector(".tipoDeTarjeta").innerHTML= '<img src="img/visa.png"/>'
    }

    else if(valorNumero.charAt(0)==5){
        document.querySelector(".tipoDeTarjeta").innerHTML= '<img src="img/mastercard.png"/>'
    }

    else if(valorNumero.charAt(0)==6){
        document.querySelector(".tipoDeTarjeta").innerHTML= '<img src="img/dinerClub.png"/>'
    }

    else if(valorNumero==""){
        document.querySelector(".tipoDeTarjeta").innerHTML= " "
    }
    else{
        document.querySelector(".tipoDeTarjeta").innerHTML="La tarjeta ingresada no pertenece a un banco"
        document.querySelector(".tipoDeTarjeta").style.color="#FF3333"
    }
}
)

//conseguir elementos para validar la tarjeta


const creditNumberCard = document.querySelector("#inputNumber");

const btnPagar = document.querySelector("#btnDatos")

function validar(){

    //datos para el resultado final

    let name1=document.querySelector("#name1")
    let apellido=document.querySelector("#apellidos")
    let telefono=document.querySelector("#telefono")
    

    let numeroTarjeta = creditNumberCard.value.replace(/\s/g, "");
    let cifrado = validator.maskify(numeroTarjeta)
    //let tipoTarjeta = validator.tarjetType(numeroTarjeta)

    if(numeroTarjeta==""){
        //alert("Por favor ingrese un numero de tarjeta")
        document.getElementById("recordatorio").innerHTML="* Recuerde que una tarjeta valida tiene un mínimo de 12 digitos"
        //document.getElementById("recordatorio").style.color="red";
    }
    else if (validator.isValid(numeroTarjeta)){
        document.getElementById("maskifyTarjeta").innerHTML = "La tarjeta que termina en " + cifrado +" es válida";
        document.getElementById("pagina3").style.display="none";
        document.getElementById("resultado").style.display="block"
        document.querySelector(".name2").innerHTM=name1.value
        document.querySelector(".resumen-nombre").innerHTML=name1.value+" "+apellido.value;
        document.querySelector(".resumen-correo").innerHTML=email.value;
        document.querySelector(".resumen-telefono").innerHTML=telefono.value;
        document.querySelector(".resumen-direccion").innerHTML=direccion.value+", "+distrito.value+", "+provincia.value+ ", "+departamento.value;

        /*
        document.getElementById("logo").innerHTML=tipoTarjeta;
        document.getElementById("maskifyTarjeta").innerHTML = "La tarjeta que termina en " + cifrado;
        document.getElementById("validatorTarjeta").style.color="rgb(14,158,55)";
        document.getElementById("validatorTarjeta").innerHTML="ES VALIDA";
        ;*/
    }
    else{
        document.querySelector(".ventana-error").style.display="block";
        /*
        document.getElementById("validatorTarjeta").style.color= "rgb(255,99,71)";
        document.getElementById("validatorTarjeta").innerHTML="NO ES VALIDA";
        document.getElementById("pagina3").style.display="none";
        document.getElementById("resultado").style.display="block";
        document.getElementById("logo").style.display="none"*/
    }
}

btnPagar.addEventListener("click",validar);
//------------Funcion para cerrar mensaje de error (x)-----------
document.querySelector(".btnCerrar").addEventListener("click",()=>{
    document.querySelector(".ventana-error").style.display="none";
    document.querySelector("#formularioTotal").reset();
});

//------------Funcion para cerrar mensaje de error (boton)-----------
document.querySelector("#cerrarError").addEventListener("click",()=>{
    document.querySelector(".ventana-error").style.display="none";
});


const recargar = document.querySelector("#volver_Inicio")


recargar.addEventListener("click",()=>window.location.reload())
/*
let datos = function(){
    let name = document.getElementById("name").value;
    let numberCard = document.getElementById("number_card").value;
    console.log(name + numberCard)
}

document.getElementById("btnDatos").addEventListener("click",datos);*/


//console.log(validator)
