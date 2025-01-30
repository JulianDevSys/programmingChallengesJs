

const orderingProducts = (object) => {
    let productosDeseordenados = []
    for (let i = 0; i <= object.length + 1; i++) {
        console.log(i)
        let valor = Math.floor(Math.random() * object.length)
        productosDeseordenados.push(object[valor])
        object.splice(valor, 1)
        console.log(object)
    }
    return productosDeseordenados
}





const productos = [{
    name: "gaseosa",
    id: 1,
    price: 6000
}, {
    name: "milo",
    id: 2,
    price: 3000
},
{
    name: "agua",
    id: 3,
    price: 2000
}
]

console.log(orderingProducts(productos))