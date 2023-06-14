
// class Compra {
//     constructor(carritoDeCompras) {
//         this.carrito = carritoDeCompras
//     }
//     obtenerSubtotal() {
//         if (this.carrito.length > 0) {
//             return this.carrito.reduce((acc, prenda)=> acc + prenda.precio, 0)
//         }
//     }
// }

// function buscarPrendas(codigo){
//     let res = prendas.find((prenda)=> prenda.codigo === parseInt(codigo))
//     return res 
// }

// function finalizarCompra() {
//     const efectuarCompra = new Compra(carrito)
//     alert(`Ok!, El costo total de tu compra es $ ${efectuarCompra.obtenerSubtotal()}. Muchas gracias por tu compra!`)
// }


// function comprar() {
//     let codigo = prompt(`Hola, ingresa el codigo de la prenda que desees`)
//     let prendaElegida = buscarPrendas(codigo)
//     if (prendaElegida !== undefined) {
//         carrito.push(prendaElegida)
//         alert(`Has agregado "${prendaElegida.articulo}" al carrito!`)
//         let respuesta = confirm('Deseas seguir comprando?')
//         if (respuesta === true) {
//             comprar()
//         } else {
//             finalizarCompra()
//         }
//     } else {
//         alert ('El codigo ingresado no es válido, Vuelve a intentarlo por favor.')
//         comprar()
//     }
// }

// comprar()


const container = document.getElementById('container')

function retornoCardHTML(prenda) {
    return `<div class="card">
                <div class="imagen"><img src="${prenda.imagen}"></div>
                <div class="prenda"><h2>${prenda.articulo}</h2></div>
                <div class="importe"><p>$ ${prenda.precio}</p></div>
                <div class="botonComprar"><button id= " ${prenda.codigo}" class="buttonClickBuy">Agregar al carrito</button></div>
            </div>`
}

function cargarProductos() {
    container.innerHTML = ''
    prendas.forEach((prenda) => {
        container.innerHTML += retornoCardHTML(prenda)
    })
    clickButton() 
}

cargarProductos()

function clickButton() {
    const buttons = document.querySelectorAll('button.buttonClickBuy') 
    for (let button of buttons) {
        button.addEventListener('click', (e)=> {
          const prendaElegida = prendas.find((prenda) => prenda.codigo === parseInt(e.target.id))
          carrito.push(prendaElegida)
          localStorage.setItem('carrito', JSON.stringify(carrito))
          
        })
    }
}


