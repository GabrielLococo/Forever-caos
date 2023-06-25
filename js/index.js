
const container = document.getElementById('container')
const inputSearch = document.querySelector('input#inputSearch')

function retornoCardHTML(prenda) {
    return `<div class="card">
                <div class="imagen"><img src="${prenda.imagen}"></div>
                <div class="prenda"><h2>${prenda.articulo}</h2></div>
                <div class="importe"><p>$ ${prenda.precio}</p></div>
                <div class="botonComprar"><button id= " ${prenda.codigo}" class="buttonClickBuy">Agregar al carrito</button></div>
            </div>`
}

function retornoError() {
    return `<div>
                <h3>Ha habido un error <br> Estamos trabajando para solucionar el problema</h3>
                <h4>Intenta de nuevo en unos instantes...</h4>
            </div>`
}

function cargarProductos(productos = prendas) {
    container.innerHTML = ''
    if (productos.length > 0) {
        productos.forEach((prenda) => container.innerHTML+= retornoCardHTML(prenda))
    } else { 
      container.innerHTML = retornoError()  
    }
    clickButton() 
}

cargarProductos(prendas)

function clickButton() {
    const buttons = document.querySelectorAll('button.buttonClickBuy') 
    for (let button of buttons) {
        button.addEventListener('click', (e)=> {
          const prendaElegida = prendas.find((prendas) => prendas.codigo === parseInt(e.target.id))
          carrito.push(prendaElegida)
          localStorage.setItem('carrito', JSON.stringify(carrito))
        })
    }
}


const filtrarProductos = ()=> {
    let resultadoBusqueda = prendas.filter((prenda)=> prenda.articulo.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (resultadoBusqueda.length > 0) {
        cargarProductos(resultadoBusqueda)
    }
}

inputSearch.addEventListener('search', filtrarProductos)