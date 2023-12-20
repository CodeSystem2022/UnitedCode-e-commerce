const botonComprar = document.querySelectorAll(".producto-agregar");
console.log(botonComprar);
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

const agregarPedido = () => {
  botonComprar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const producto = e.target.parentElement;
      carrito.push({
        quantity: 1,
        title: producto.querySelector("h4").textContent,
        price: producto.querySelector("p").textContent,
        imagen: producto.querySelector("img").src,
      });
      console.log(carrito);
      carrito.forEach((products) => {
        saveLocal();
        contarCarrito();
      });
    });

    const saveLocal = () => {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };
  });
};

const contarCarrito = () => {
  const count = document.querySelector("#cart-Counter");
  const memoria = JSON.parse(localStorage.getItem("carrito"));
  if (memoria && memoria.length > 0) {
    const cuenta = memoria.reduce(
      (acum, current) => acum + current.quantity,
      0
    );
    count.innerText = cuenta;
  } else {
    count.innerText = 0;
  }
};

agregarPedido();
contarCarrito();
