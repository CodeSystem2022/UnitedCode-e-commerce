const vistaProductos = document.getElementById("vistaProductos");
const totalElement = document.getElementById("total");

function tarjetaCarrito() {
  let sumar = 0;
  const prendas = JSON.parse(localStorage.getItem("carrito"));
  console.log(prendas);

  prendas.forEach((element, index) => {
    // Eliminar el símbolo "$" del precio y convertir a número
    const precioNumerico = parseFloat(element.price.replace('$', ''));

    const nuevaPrenda = document.createElement("div");
    nuevaPrenda.classList = "prenda-carrito";
    nuevaPrenda.innerHTML = `
      <img src="${element.imagen}"/>
      <h4>${element.title}</h4>
      <h4>${element.price}</h4>
      <button onclick="eliminarPrenda(${index}, ${precioNumerico})">Eliminar</button>
    `;
    vistaProductos.append(nuevaPrenda);

    // Sumar el precio numérico
    sumar += precioNumerico;
  });

  // Mostrar el total
  totalElement.textContent = `Total: $${sumar.toFixed(2)}`;
}

function eliminarPrenda(index, precio) {
  const prendas = JSON.parse(localStorage.getItem("carrito"));

  // Restar el precio al total
  let sumar = parseFloat(totalElement.textContent.replace('Total: $', ''));
  sumar -= precio;
  totalElement.textContent = `Total: $${sumar.toFixed(2)}`;

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
//   let sumar = 0;
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
//     sumar += precioNumerico;
//   });
//   console.log(sumar)
// }

// tarjetaCarrito();
// contarCarrito();