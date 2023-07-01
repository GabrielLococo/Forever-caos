const tbody = document.querySelector('tbody')


function retornoTablaHTML(prendaCarrito) {
    return `<tr>
                <td class="imagenTabla"><img src=".${prendaCarrito.imagen}"></td>
                <th>${prendaCarrito.codigo}</th>
                <td>${prendaCarrito.articulo}</td>
                <td>$${prendaCarrito.precio}</td>
                <td><button class="buttonClickUnbuy" id= "${prendaCarrito.codigo}">❌ </button></td>
            </tr>`
}

if (carrito.length > 0) {
    carrito.forEach(prendaCarrito => {
       if (prendaCarrito !== null) tbody.innerHTML += retornoTablaHTML(prendaCarrito)
    })
}

function clickButtonUnbuy() {
    const buttons = document.querySelectorAll('button.buttonClickUnbuy') 
    for (let button of buttons) {
        button.addEventListener('click', (e)=> {
          const prendaElegida = prendas.find((prenda) => prenda.codigo === e.target.id)
          carrito.splice(prendaElegida,1)
          localStorage.setItem('carrito', JSON.stringify(carrito))
          location.reload()
        })
    }
}

function clickButtonBuyFinal(){
    const buttonFinalBuy = document.querySelector('button.buttonBuyFinal')
    buttonFinalBuy.addEventListener('click',function(){
        Swal.fire({
            title: '¡Listo!',
            text: 'En instantes te llegará el detallado de tu compra a tu email! Gracias por comprar en ForeverCaos',
            confirmButtonText: ' 💜 '
          })
    })
}
clickButtonBuyFinal()

clickButtonUnbuy()
