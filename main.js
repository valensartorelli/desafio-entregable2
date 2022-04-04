// Creo el array de productos
const arrayProductos = ['Jean', 'Pollera', 'Short', 'Remera', 'Musculosa', 'Vestido', 'Malla', 'Pañuelo'];

// Le muestro al usuario los productos disponibles
console.log('Estos son los productos que tenemos');
for(let produ of arrayProductos) {
    console.log(produ);
}

let producto = prompt("Ingrese el nombre del producto elegido")

let cantidadProducto = parseInt(prompt("Ingrese la cantidad que quiere comprar"))


let precioProducto = 0;
let precioTotal = 0;

function total () {
    
    if (producto == "Jean" || producto == "jean") {
        precioProducto = 9000;
    } else if (producto == "Pollera" || producto == "pollera") { 
        precioProducto = 7500;
    } else if (producto == "Short" || producto == "short") {
        precioProducto = 8100; 
    } else if (producto == "Remera" || producto == "remera") {
        precioProducto = 400; 
    } else if (producto == "Musculosa" || producto == "musculosa") {
        precioProducto = 3500; 
    } else if (producto == "Vestido" || producto == "vestido") {
        precioProducto = 5000; 
    } else if (producto == "Malla" || producto == "malla") {
        precioProducto = 3200; 
    } else if (producto == "Pañuelo" || producto == "pañuelo") {
        precioProducto = 1500; 
    } 

    precioTotal = precioProducto * cantidadProducto;
    return precioTotal;
}

let totalFinal = total();

alert("El total de " + cantidadProducto + " " + producto + " es de $" + totalFinal)
let productoComprado = arrayProductos.indexOf(producto)
arrayProductos.splice(productoComprado, 1);

console.log('Estos son los productos restantes');
for(let prods of arrayProductos) {
    console.log(prods);
}