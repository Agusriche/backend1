class Desafio1 {
    constructor(nombre, apellido, libros, mascotas) {  
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    }
    
    getNameBooks(){
      return this.libros.map(item => item.nombre);
    }
  }
  
  const desafio1 = new Desafio1('Juan', 'Paz', [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}], ['Scooby', 'Dollar'])
  
  console.log(desafio1.getNameBooks());




  //aa




// Declaración de funciones constructoras
function UserFunction(nombre, apellido, libros, mascotas){
    this.nombre = (nombre == undefined || nombre == "") ? "John" : nombre;
    this.apellido = (apellido  == undefined || apellido == "") ? "Doe" : apellido;
    this.libros = (libros == undefined) ? libros = [] : libros;
    this.mascotas = (mascotas == undefined) ? mascotas = [] : mascotas;
}

UserFunction.prototype.getFullName = function () {
    return `${this.nombre} ${this.apellido}`
}

UserFunction.prototype.addMascota = function (mascota) {
    return this.mascotas.push(mascota);
}

UserFunction.prototype.getMascotas = function () {
    return this.mascotas.length;
}

UserFunction.prototype.addBook = function (titulo,autoria) {
    const books = {titulo:titulo, autoria:autoria};
    return this.libros.push(books);
}

UserFunction.prototype.getBooks = function () {
    const titulos = [];
    this.libros.forEach(libro => {
        titulos.push(libro.titulo)
    });
    return titulos;
}


//Declaración de instancia de la función constructora
const dianaFunction = new UserFunction(
    "Diana",
    "Di Stefano",
    [
      { titulo: "La naranja mecánica", autoria: "Anthony Burgess" },
      { titulo: "El tao de la física", autoria: "Fritjof Capra" }
    ],
    ["china", "pepi"]
)


const empty = new UserFunction()


const informacionWeb=document.querySelector(".informacion");


//Resolución del ejercicio

//Con funciones constructoras
console.warn("Ejercicio realizado con Funciones Constructoras")
console.log(`El nombre completo del user es ${dianaFunction.getFullName()}`)
dianaFunction.addMascota("crazy");
console.log(`La cantidad actualizada de mascotas de la persona es ${dianaFunction.getMascotas()}`);
dianaFunction.addBook("El segundo sexo", "Simone de Beauvoir");
console.log("Lista completa de sus libros favoritos:")
console.log(dianaFunction.getBooks());

console.log('\n');
console.log("Datos completos de la persona agregada: ")
console.log(dianaFunction)




//Mostrar info en el front-end con funciones constructoras

function mostrarDatosFuncion() {

    const info=document.createElement('div');
    info.innerHTML= `
    <h1>Ejercicio realizado con Funciones Constructoras</h1>
    <ul>
        <li>El nombre completo del user es ${dianaFunction.getFullName()}</li>
        <li>La cantidad actualizada de mascotas de la persona es ${dianaFunction.getMascotas()}</li>
        <li>Lista completa de sus libros favoritos: ${dianaFunction.getBooks()}</li>
    </ul>`;
    informacionWeb.appendChild(info);
}
mostrarDatosFuncion();


