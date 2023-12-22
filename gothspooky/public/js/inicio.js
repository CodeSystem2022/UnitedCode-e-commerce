const botonComprar = document.querySelectorAll(".producto-agregar");
const count = document.querySelector(".cart-counter");
const carrito = [];

//Carrusel
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
    if (localStorage.carrito) {
      let carrito = JSON.parse(localStorage.carrito);

      let index = carrito.findIndex((prod) => prod.id == e.target.dataset.id);
      if (index != -1) {
        carrito[index].cantidad++;
      } else {
        carrito.push({ id: e.target.dataset.id, cantidad: 1 });
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      localStorage.setItem(
        "carrito",
        JSON.stringify([{ id: e.target.dataset.id, cantidad: 1 }])
      );
    }
    count.innerText = productoEnElCarrito();
  });
});
const productoEnElCarrito = () => {
  return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0;
};
count.innerText = productoEnElCarrito();

// const contarCarrito = () => {
//   const count = document.querySelector(".cart-counter");
//   const memoria = JSON.parse(localStorage.getItem("carrito"));
//   if (memoria && memoria.length > 0) {
//     const cuenta = memoria.reduce(
//       (acum, current) => acum + current.quantity,
//       0
//     );
//     count.innerText = cuenta;
//   } else {
//     count.innerText = 0;
//   }
// };
