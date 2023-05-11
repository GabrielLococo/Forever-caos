
const cuotas = 3


function mostrarCuotas() {
    console.log('Cuotas sín interés:')
    for (let i = 0; i < cuotas; i++) {
        console.log((i + 1) + ' cuotas sin interés')
    }
    console.warn('Te recordamos que todas las semanas tenemos nuevas ofertas!')
}

function mostrarPrecio(codigo) {
    console.log('Puedes elegir pagar tu prenda en cuotas!')
    switch (parseInt(codigo)) {
        case 1:
            alert("Remera Caos is Me cuesta $5000")
            break;
        case 2:
            alert("Remera Caos Shin & Shan cuesta $4500")
            break;
        case 3:
            alert("Remera Flor cuesta $3800")
            break;
        case 4:
            alert("Buzo Alone cuesta $12000")
            break;
        case 5:
            alert("Pantalón Disorder cuesta $8000")
            break;
        default:
            alert("El número de prenda no existe. Por favor ingresa un número válido.")
    }
}

function presentacion() {
    let nombre = prompt("Bienvenido a Forever Caos, nos dirías tu nombre?")
    if (nombre) {
        respuesta = confirm(`Hola ${nombre} !, ¿Deseas comprar alguna prenda?`)
    } else {
        respuesta = confirm("hola!,¿Deseas comprar alguna prenda? ")
    }

    if (respuesta) {
        let codigo = prompt("ingresa el número de prenda que desees: ")

    if (codigo) {
        mostrarPrecio(codigo)
        mostrarCuotas()
    }
    } else {
        console.warn("Te esperamos cuando gustes, gracias por visitar Forever Caos.")
    }
}

