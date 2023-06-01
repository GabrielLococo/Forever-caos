const carrito = []
const prendas = [{codigo: 1, articulo: 'Remera Caos Is Me', precio: 3500 },
                 {codigo: 2, articulo: 'Remera Caos Shin & Shan', precio: 3700 },
                 {codigo: 3, articulo: 'Remera Flor', precio: 3100},
                 {codigo: 4, articulo: 'Buzo Alone', precio: 7200},
                 {codigo: 5, articulo: 'Pantalon Disorder', precio: 5360},
                 {codigo: 6, articulo: 'Camiza Barbara', precio: 4500},
                 {codigo: 7, articulo: 'Guantes Caos', precio: 2300},
                 {codigo: 8, articulo: 'Gorro Destroy', precio: 2100},
                 {codigo: 9, articulo: 'Bufanda Retro', precio: 1800},
                 {codigo: 10, articulo: 'Pantalon Judas', precio: 4800}]


class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, prenda)=> acc + prenda.precio, 0)
        }
    }
}

function buscarPrendas(codigo){
    let res = prendas.find((prenda)=> prenda.codigo === parseInt(codigo))
    return res 
}

function finalizarCompra() {
    const efectuarCompra = new Compra(carrito)
    alert(`Ok!, El costo total de tu compra es $ ${efectuarCompra.obtenerSubtotal()}. Muchas gracias por tu compra!`)
}


function comprar() {
    let codigo = prompt(`Hola, ingresa el codigo de la prenda que desees`)
    let prendaElegida = buscarPrendas(codigo)
    if (prendaElegida !== undefined) {
        carrito.push(prendaElegida)
        alert(`Has agregado "${prendaElegida.articulo}" al carrito!`)
        let respuesta = confirm('Deseas seguir comprando?')
        if (respuesta === true) {
            comprar()
        } else {
            finalizarCompra()
        }
    } else {
        alert ('El codigo ingresado no es válido, Vuelve a intentarlo por favor.')
        comprar()
    }
}


comprar()
