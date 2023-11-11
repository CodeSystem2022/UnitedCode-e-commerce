/* //const e = require("express");

//products
const productos = [
    {
        id: 'camisa',
        titulo: 'Producto 01',
        imagen: 'images/products/producto1.jpg',
        categoria: {
            nombre: 'Parte de Arriba',
            id: 'parte-de-arriba'
        }, 
        precio: 2000
    }, 
    {
        id: 'camisa',
        titulo: 'Producto 01',
        imagen: 'images/products/producto1.jpg',
        categoria: {
            nombre: 'Parte de Arriba',
            id: 'parte-de-arriba'
        }, 
        precio: 2000
    }, 
    {
        id: 'camisa',
        titulo: 'Producto 01',
        imagen: 'images/products/producto1.jpg',
        categoria: {
            nombre: 'Parte de Arriba',
            id: 'parte-de-arriba'
        }, 
        precio: 2000
    }, 
    {
        id: 'camisa',
        titulo: 'Producto 02',
        imagen: 'images/products/producto2.jpg',
        categoria: {
            nombre: 'Parte de Abajo',
            id: 'parte-de-abajo'
        },
        precio: 3000
    },
    {
        id: 'camisa',
        titulo: 'Producto 02',
        imagen: 'images/products/producto2.jpg',
        categoria: {
            nombre: 'Parte de Abajo',
            id: 'parte-de-abajo'
        },
        precio: 3000
    },
    {
        id: 'camisa',
        titulo: 'Producto 02',
        imagen: 'images/products/producto2.jpg',
        categoria: {
            nombre: 'Parte de Abajo',
            id: 'parte-de-abajo'
        },
        precio: 3000
    }, 
    {
        id: 'camisa',
        titulo: 'Producto 02',
        imagen: 'images/products/producto2.jpg',
        categoria: {
            nombre: 'Parte de Abajo',
            id: 'parte-de-abajo'
        },
        precio: 3000
        
    },
    {
        id: 'camisa',
        titulo: 'Producto 04',
        imagen: 'images/products/producto4.jpg',
        categoria: {
            nombre: 'Ofertas',
            id: 'ofertas'
        }, 
        precio: 2000
    }, 
    {
        id: 'camisa',
        titulo: 'Producto 04',
        imagen: 'images/products/producto4.jpg',
        categoria: {
            nombre: 'Nuevos Ingresos',
            id: 'nuevos-ingresos'
        },
        precio: 3000
    },
    {
        id: 'camisa',
        titulo: 'Producto 03',
        imagen: 'images/products/producto3.jpg',
        categoria: {
            nombre: 'Accesorios',
            id: 'accesorios'
        },
        precio: 3000
    },
    {
        id: 'camisa',
        titulo: 'Producto 03',
        imagen: 'images/products/producto3.jpg',
        categoria: {
            nombre: 'Accesorios',
            id: 'accesorios'
        },
        precio: 3000
    }, 
    {
        id: 'camisa',
        titulo: 'Producto 03',
        imagen: 'images/products/producto3.jpg',
        categoria: {
            nombre: 'Accesorios',
            id: 'accesorios'
        },
        precio: 3000
        
    }
];



const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <div class="producto-tarjeta columna">
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            </div> 
        `; 
         
        contenedorProductos.append(div);
    })

    
} 

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        
    });
});


 */