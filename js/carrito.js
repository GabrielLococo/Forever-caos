const tbody = document.querySelector('tbody')

function retornoTablaHTML(prendaCarrito) {
    return `<tr>
                <td class="imagenTabla"><img src=".${prendaCarrito.imagen}"></td>
                <th>${prendaCarrito.codigo}</th>
                <td>${prendaCarrito.articulo}</td>
                <td>$${prendaCarrito.precio}</td>
                <td>logo</td>
            </tr>`
}

if (carrito.length > 0) {
    carrito.forEach(prendaCarrito => {
        tbody.innerHTML += retornoTablaHTML(prendaCarrito)
    })
}



//arreglar boton index carrito
//ver en la clase el boton QUITAR
