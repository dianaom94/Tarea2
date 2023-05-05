//TAREA 2

//Crea una clase Persona con propiedades como nombre, edad y género 
//Filtralo por género y ordena por edad:


class Persona {
    nombre = "";
    edad = 0;
    genero = "";

    constructor (name, age = 0, gender){
        this.nombre = name;
        this.edad = age;
        this.genero = gender;
    }

}

let listaPersonas = [
    new Persona ("Diana", 28, "femenino"),
    new Persona ("Fernando", 31, "masculino"),
    new Persona ("Dora", 64, "femenino"),
    new Persona ("Johana", 39, "femenino"),
    new Persona ("Nelson", 43, "masculino")
]

let personaGenero1 = listaPersonas.filter (datos => datos.genero === "femenino")
console.log ("Personas de género Femenino:"+ " ", personaGenero1)
console.log ()

let personaGenero2 = listaPersonas.filter (datos2 => datos2.genero === "masculino")
console.log ("Personas de género Masculino:"+" ",personaGenero2)




let personaEdad = listaPersonas.sort((a, b) => {
    if (a.edad> b.edad){
        return 1;
    }
    else if(a.edad < b.edad){
        return -1;
    }
    else return 0
})


console.log ("Lista de personas ordenadas por edad:"+" ",personaEdad)




//Crea una clase Producto con propiedades como nombre, precio, cantidad y descuento
// Utiliza métodos para calcular el precio total de la compra y aplicar descuentos:

class Producto {
    nombre = "";
    precio = 0;
    cantidad = 0;
    descuento = 0;

    constructor ( name, price, quantity, discount){
        this.nombre = name;
        this.precio = price;
        this.cantidad = quantity;
        this.descuento = discount;
    }

    obtenerPrecio (){
        return this.precio * this.cantidad;
    }

    realizarDescuento (){
        const totalPrice = this.obtenerPrecio();
        const aplicarDescuento = (totalPrice * this.descuento ) / 100;
        return totalPrice - aplicarDescuento
    }
}


let listaProductos = [
    new Producto ("OnePieceVol1", 20, 2, 5),
    new Producto ("BleachVol2", 15, 1, 8),
    new Producto ("HunterxhunterVol5", 18, 2, 2),
    new Producto ("FMAVol10", 20, 5, 4),
    new Producto ("AkaYonaVol8", 25, 10, 5)
]

let precioTotal = 0;
let precioFinal = 0;

for (const productCount of listaProductos){
    precioTotal += productCount.obtenerPrecio();
    precioFinal += productCount.realizarDescuento();

}

console.log ("El precio total es:" + " "+ precioTotal+"€")
console.log ("Aplicando descuentos...")
console.log ("El precio final con descuentos aplicados es: " + precioFinal + "€");






//Crea una clase Vehiculo con propiedades como marca, modelo, año y precio.
//Utiliza métodos para filtrar el array por marca, modelo o año y ordenar por precio.


class Vehiculo {
    marca = "";
    modelo = "";
    año = 0;
    precio = 0;

    constructor (make, model, year, price){
        this.marca = make,
        this.modelo = model,
        this.año = year,
        this.precio = price
    }

}


listaCoches = [
    new Vehiculo ("BMW", "Z4", 2010, 19.900),
    new Vehiculo ("Ford","Focus Estate", 2018, 15.995),
    new Vehiculo ("SEAT", "Arona", 2010, 16.700),
    new Vehiculo ("Volkswagen", "T-Roc Cabrio", 2022, 32.995),
    new Vehiculo ("Audi", "Q2", 2018, 19.530),

];

listaCoches.sort ((a, b) => a.marca.localeCompare(b.marca));

console.log("Lista de coches ordenados por marca:" +" ",  listaCoches);


listaCoches.sort ((a, b)=> a.modelo.localeCompare(b.modelo))

console.log("Lista de coches ordenados por modelo:" +" ",  listaCoches);


listaCoches.sort ((a, b)=> {
    if (a.año > b.año){
        return 1
    }
    else if (a.año < b.año){
        return -1
    }
    else { return 0}
});

console.log ("Lista de coches ordoneados por año:" + " ", listaCoches);


listaCoches.sort ((a, b)=>{
    if( a.precio > b.precio ){
        return 1
    }
    else if( a.precio < b.precio ){
        return -1
    }
    else {
        return 0
    }
})

console.log ("Lista de coches ordenados por precio" + " ", listaCoches)





