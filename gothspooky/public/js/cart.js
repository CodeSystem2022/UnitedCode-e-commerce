const vistaProductos = document.getElementById("vistaProductos");
const preciototal = document.getElementById("total");
let total = 0;

productos.forEach((product) => {
  const content = document.createElement("div");
  content.innerHTML = `
    <div class="product">
        <div class="tarjeta">
            <img class="product-img" src="${product.img}">
            <button class="remove-product">Eliminar</button>
        </div>
        <div class="product-info">      
            <h4>${product.productName}</h4>
        </div>
        <div class="price">
        <h4> $ ${product.price} </h4>
        </div>
    </div>
    <hr>
    `;
  vistaProductos.append(content);

  const removeButton = content.querySelector(".remove-product");
  removeButton.addEventListener("click", () => {
    content.remove();
    total -= product.price;
    totalElementos.innerHTML = `<h2>Total: $ ${total}</h2>`;

    if (total === 0) {
      vistaProductos.innerHTML = "<h2>Carrito Vacío</h2>";
    }
  });

  total += product.price;
});

const totalElementos = document.createElement("div");
totalElementos.innerHTML = `<h2>Total: $ ${total}</h2>`;
preciototal.append(totalElementos);

if (total === 0) {
  vistaProductos.innerHTML = "<h2>Carrito Vacío</h2>";
}
