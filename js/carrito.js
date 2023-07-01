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
        tbody.innerHTML += retornoTablaHTML(prendaCarrito)
    })
}


// funcion de quitar elementos del carrito que no funciona, pero es un problema secundario, no darle bola.

// function clickButton() {
//     const buttons = document.querySelectorAll('button.buttonClickDelete') 
//     for (let button of buttons) {
//         button.addEventListener('click', (e)=> {
//           const prendaElegida = prendas.find((prenda) => prenda.codigo === parseInt(e.target.id))
//           carrito.push(prendaElegida)
//           localStorage.setItem('carrito', JSON.stringify(carrito))
//         })
//     }
// }


