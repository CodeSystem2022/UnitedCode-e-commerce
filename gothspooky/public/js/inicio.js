const botonComprar = document.querySelectorAll(".producto-agregar");
const count = document.querySelector(".cart-counter");
let carrito = [];

// Carrusel
let sliderInner = document.querySelector(".slider--inner");
let images = sliderInner.querySelectorAll("img");
let index = 1;

setInterval(function () {
  let percentage = index * -101;
  sliderInner.style.transform = "translateX(" + percentage + "%)";
  index++;
  if (index >= images.length - 1) {
    index = 0;
  }
}, 2000);

botonComprar.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    let producto = {
      id: e.target.dataset.id,
      cantidad: 1,
      
    };

    if (localStorage.carrito) {
      carrito = JSON.parse(localStorage.carrito);

      let index = carrito.findIndex((prod) => prod.id == producto.id);
      if (index != -1) {
        carrito[index].cantidad++;
      } else {
        carrito.push(producto);
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      localStorage.setItem("carrito", JSON.stringify([producto]));
    }
    count.innerText = productoEnElCarrito();
  });
});

const productoEnElCarrito = () => {
  return localStorage.carrito
    ? JSON.parse(localStorage.carrito).reduce(
        (total, prod) => total + prod.cantidad,
        0
      )
    : 0;
};

count.innerText = productoEnElCarrito();
