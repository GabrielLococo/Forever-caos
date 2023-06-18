
const container = document.getElementById('container')

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

function cargarProductos() {
    container.innerHTML = ''
    if (prendas.length > 0) {
        prendas.forEach((prenda) => container.innerHTML+= retornoCardHTML(prenda))
    } else { 
      container.innerHTML = retornoError()  
    }
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


