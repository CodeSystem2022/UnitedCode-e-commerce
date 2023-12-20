const vistaProductos = document.getElementById("vistaProductos");

function tarjetaCarrito() {
  const prendas = JSON.parse(localStorage.getItem("carrito"));
  console.log(prendas);
  prendas.forEach((element) => {
    const nuevaPrenda = document.createElement("div");
    nuevaPrenda.classList = "prenda-carrito";
    nuevaPrenda.innerHTML = `
      <img src="${element.imagen}"/>
      <h4>${element.title}</h4>
      <h4>${element.price}</h4>
    `;
    vistaProductos.append(nuevaPrenda);
  });
}

tarjetaCarrito();
contarCarrito();