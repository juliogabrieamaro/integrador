$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
const cantidadEntradas = document.getElementById('cantidad1')

const nombre = document.getElementById('nom')
const apellido = document.getElementById('ape')
const botonCalcular = document.getElementById('botonCalcular')

const botonBorrar = document.getElementById('botonBorrar')
const categoria = document.getElementById('inputState')
var precio = 200;

botonCalcular.addEventListener('click', resumen)
botonBorrar.addEventListener('click', borrar)


function validarEmail()
    {
        var correo = document.getElementById('corr').value
        
        if(correo.value != "" && correo.indexOf("gmail.com") != -1)
        {
            mensajeValido("correo valido")
        }
       else
       {
            mensajeInvalido("error")
      }

    }
function mensajeValido(texto)
{
    totalCompra.innerHTML = precio
}
function mensajeInvalido(texto)
{
    
    totalCompra.innerHTML = 'Total a pagar $'
 alert("mail incorrecto")
}

function resumen() {

    
    console.log(categoria.value)

    console.log(cantidad1.value)

    precio = precio * cantidad1.value;
    //totalCompra.style.display="block"


  

    if (categoria.value == "Estudiante") {
        precio = precio - (precio * 0.8)

    }
    else if (categoria.value == "Trainee") {
        precio = precio / 2

    }
    else {
        precio = precio - (200 * 0.15)


    }
    
    validarEmail();
    
}



function borrar() {
    precio = 200
    totalCompra.innerHTML = 'Total a pagar $'

    cantidad1.value = ''
    nombre.value = ''
    apellido.value = ''
    correo.value = ''
}
