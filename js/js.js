/* menu */

let opcion = prompt("Selecciona una opción:\n1. Productos\n2. Ayuda\n3. Sponsors\n4. Dejar un mensaje");

switch (opcion) {
  case "1":
    alert("Has seleccionado la opción 'Productos'");
    mostrarProductos();
    
    break;

  case "2":
    alert("Has seleccionado la opción 'Ayuda'");
    mostrarAyuda();
    break;

  case "3":
    alert("Has seleccionado la opción 'Sponsors'");
    mostrarSponsors();
    break;

  case "4":
    alert("Has seleccionado la opción 'Dejar un mensaje'");
    verificarEdad();
    break;

  default:
    alert("error");
    break;
}

/* functions */


function mostrarProductos() {
    let productos = "- Notebooks\n" +
                    "- Almacenamiento\n" +
                    "- Fuentes\n" +
                    "- Motherboards\n" +
                    "- GPU";
  
    alert(productos);
  }
  

 

 


function mostrarAyuda() {
  alert("Comunícate con el telefono 123456789");
  
}

function mostrarSponsors() {
    alert("No tenemos ningun sponsor todavia");
}

/* mensaje: si no tiene 18 no puede dejar un mensaje */

function verificarEdad() {
  let edad = prompt("Cuantos años tenes?");
  if (edad >= 18) {
    alert("Deja tu mensaje, por favor");
    let mensaje = prompt("Escribi tu mensaje:");
    alert("Gracias por tu mensaje");
  } else {
    alert("Debes ser mayor de 18 años para dejar un mensaje");
  }
}