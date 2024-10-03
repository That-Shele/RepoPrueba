const Empleado = {
    Nombre : "Pepito",
    Apellido : "De la o",
    Sueldo : 1200
}

const Producto = {
    Id : "0001",
    PNombre : "Dulces de chocolate",
    Precio : 1.50
}

const Clientes = {
    Codigo : "0001",
    Nombre : "Pepito",
    Apellido : "Alcantara"
}

console.log(Empleado.Nombre + " " + Empleado.Apellido + " " + Empleado.Sueldo)
console.log(`Empleado : ${Empleado.Nombre} ${Empleado.Apellido} | ${Empleado.Sueldo}`)

let {Nombre, Apellido, Sueldo} = Empleado
console.log("Empleado ---> " + Nombre + " " + Apellido + " " + Sueldo)

const Compra = Object.assign(Producto, Clientes)

let {Codigo, PNombre, Precio, } = Compra
console.log("Compra --> " + Codigo + " " + PNombre + " " + Precio)