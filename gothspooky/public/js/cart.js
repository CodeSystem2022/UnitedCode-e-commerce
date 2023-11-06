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
    totalElementos.innerHTML = `<h3>Total: $ ${total}</h3>`;

    if (total === 0) {
      vistaProductos.innerHTML = "<h3>Tu carrito se encuentra vacío</h3>";
    }
  });

  total += product.price;
});

const totalElementos = document.createElement("div");
totalElementos.innerHTML = `<h3>Total: $ ${total}</h3>`;
preciototal.append(totalElementos);

if (total === 0) {
  vistaProductos.innerHTML = `<h3>Tu carrito se encuentra vacío</h3>`;
}

cartBtn.addEventListener("click", "/");