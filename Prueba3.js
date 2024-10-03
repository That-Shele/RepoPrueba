class Empleado {
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this.nombre}, Sueldo: $${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this.departamento}`;
    }
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado("Juan", 3000);
imprimir(empleado1);

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
imprimir(gerente1);


//Manejo de errores
let resultado = "";
try {
    if (isNaN(resultado)) throw "No es un número";
    else if (resultado === "") throw "Es cadena vacía";
    else if (resultado >= 0) throw "Valor positivo";
    else if (resultado < 0) throw "Valor negativo";
}
catch (error){
    console.log(error);
}
finally {
    console.log("Termina revision de errores");
}

//Funciones de flecha
let saludar = () => {
    console.log("Saludos desde mi funcion lambda");
}
saludar();

let Saludar = () => console.log("Saludos desde mi otra funcion lambda");
Saludar();

const saludo = () => "Saludos desde esta funcion";
console.log(saludo());

const funcionParametrosClasica = function (mensaje){
    console.log(mensaje);
}

funcionParametrosClasica("Chele guaperrimo");

const flechaParametros = mensaje => console.log(mensaje);
flechaParametros("Chele ultra mega guapo");

const funcionVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado : ${resultado}`;
}
console.log(funcionVariosParametros(3, 5));