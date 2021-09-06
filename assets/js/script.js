//Dom manipulation

let formulario = document.querySelector("form");

let consulta = (event) => {
  event.preventDefault();

  let propietario = document.getElementById("propietario").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let tipoAnimal = document.getElementById("tipo").value;
  let enfermedad = document.getElementById("enfermedad").value;

  const mascota = new Mascota(
    propietario,
    direccion,
    telefono,
    tipoAnimal,
    nombreMascota,
    enfermedad
  );

  function mostrarResultado(mascota) {
    let result = document.getElementById("resultado");
    result.innerHTML = `
      <li>${mascota.datosPropietario()}</li>
      <li>${mascota.tipo}, y se llama: ${
      mascota.nombreMascota
    }. El motivo de la consulta es: ${mascota.enfermedad}</li>`;
  }

  //if

  if (tipoAnimal == "perro") {
    const perro = mascota;
    mostrarResultado(perro);
  } else if (tipoAnimal == "gato") {
    const gato = mascota;
    mostrarResultado(gato);
  } else if (tipoAnimal == "conejo") {
    const conejo = mascota;
    mostrarResultado(conejo);
  } else {
    ("No elegiste el tipo de animal adecuado :(");
  }
};
formulario.addEventListener("submit", consulta);

//Herencias

class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  datosPropietario() {
    return `Nombre del dueño: ${this.nombre}. Dirección: ${this.direccion}. Teléfono de contacto: ${this.telefono}`;
  }
}
//herencia animal de propietario
class Animal extends Propietario {
  constructor(
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario,
    tipo
  ) {
    super(nombrePropietario, direccionPropietario, telefonoPropietario);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}

//herencia mascotal de animal
class Mascota extends Animal {
  constructor(
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario,
    tipoAnimal,
    nombreMascota,
    enfermedad
  ) {
    super(
      nombrePropietario,
      direccionPropietario,
      telefonoPropietario,
      tipoAnimal
    );
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevoNombreMascota) {
    this._nombre = nuevoNombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

//testeando
/*
const entryEjemplo = new Mascota(
  "Felipe",
  "Valparaiso",
  987654321,
  "Doge",
  "Kimei",
  "guaton"
);
console.log(entryEjemplo);
*/
