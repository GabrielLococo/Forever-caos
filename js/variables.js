function recuperarCarrito() {
    if (localStorage.getItem('carrito')) {
    return JSON.parse(localStorage.getItem('carrito'))
    }else {
        return []
    }
}

const carrito = recuperarCarrito()

const URL = 'js/prendas.json'

const prendas = []

