const vistaProductos = document.getElementById("vistaProductos");
const totalElement = document.getElementById("total");

function tarjetaCarrito() {
  let total = 0;
  const prendas = JSON.parse(localStorage.getItem("carrito"));
  console.log(prendas);

  prendas.forEach((element, index) => {
    // Eliminar el símbolo "$" del precio y convertir a número
    const precioNumerico = parseFloat(element.price.replace("$", ""));

    const nuevaPrenda = document.createElement("div");
    nuevaPrenda.classList = "prenda-carrito";
    nuevaPrenda.innerHTML = `
      <img src="${element.imagen}"/>
      <h4>${element.title}</h4>
      <h4>${element.price}</h4>
      <button onclick="eliminarPrenda(${index}, ${precioNumerico})">Eliminar</button>
    `;
    vistaProductos.append(nuevaPrenda);

    // total el precio numérico
    total += precioNumerico;
  });

  // Mostrar el total
  if (total === 0) {
    vistaProductos.innerHTML = `<h3>Tu carrito se encuentra vacío</h3>`;
  } else {
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }
}

function eliminarPrenda(index, precio) {
  const prendas = JSON.parse(localStorage.getItem("carrito"));

  // Restar el precio al total
  let total = parseFloat(totalElement.textContent.replace("Total: $", ""));
  total -= precio;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;

  // Eliminar la prenda del carrito
  prendas.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(prendas));

  // Actualizar la vista del carrito
  vistaProductos.innerHTML = "";
  tarjetaCarrito();
}

tarjetaCarrito();

// const vistaProductos = document.getElementById("vistaProductos");

// function tarjetaCarrito() {
//   let total = 0;
//   const prendas = JSON.parse(localStorage.getItem("carrito"));
//   //console.log(prendas);
//   prendas.forEach((element) => {
//     const precioNumerico = parseFloat(element.price.replace('$', ''));
//     const nuevaPrenda = document.createElement("div");
//     nuevaPrenda.classList = "prenda-carrito";
//     nuevaPrenda.innerHTML = `
//       <img src="${element.imagen}"/>
//       <h4>${element.title}</h4>
//       <h4>${element.price}</h4>
//     `;
//     vistaProductos.append(nuevaPrenda);
//     total += precioNumerico;
//   });
//   console.log(total)
// }

// tarjetaCarrito();
// contarCarrito();
