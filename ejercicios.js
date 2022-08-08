//function crearUsuario() {
    // Crea una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
  
//}
function Usuario(usuario, nombre,email,contraseña) {

this.usuario = usuario;
this.nombre = nombre;
this.email = email;
this.contraseña = contraseña;
var opciones = {usuario : usuario, nombre: nombre,email: email,contraseña:contraseña}
this.saludar = function() {

return 'Mi nombre es ' + this.nombre;
}
}
const Juan = new Usuario('jota','Juan','mail@gmail.com','1234');
const Luis = new Usuario('lu','luis','mail2@gmail.com','4321');
console.log(Juan.saludar()); 
console.log(Luis.saludar());
console.log(Juan)



  function creaObj() { 
    // Crea una función constructor llamada "datosPersona" y luego crea dos personas nuevas con datos de datosPersona
    // Los datos, son nombre, apellido y dni
    // Tu código:
  }
  
  
  function creaObj2() { 
    // Crea una función constructor llamada "Default" y luego crea dos personas nuevas con datos de datosPersona sin pasarle ningun campo
    // Los datos, son nombre, apellido y dni
    // Los datos que deberian mostrarse al acceder a uno de ellos deben ser por deafult, los que ustedes quieran
    // Tu código:
  }
  
  function Computador() { 
    // Deben crear una funcion constructora
    // Los datos son, id, marca, procesador, ram, ssd.
    // Deben simular el inicio de una pc en donde primero muestre el mensaje que esta iniciando y luego una funcion que me diga los datos de la computadora.
    // La funcion debe estar echa dentro de la funcion constructora.
    // Los datos de la computadora deben guardarse dentro de otra variable y mostrar esa persona para ver los datos.
    // Tu código:
  }
