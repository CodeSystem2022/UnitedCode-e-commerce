window.addEventListener("load", () => {
  //console.log('Se lanzo');

  const qs = (tag) => {
    return document.querySelector(tag);
  };

  const checkoutButton = qs("#checkout-btn");

  //mp
  const mercadopago = new MercadoPago(
    "TEST-a14a7b12-fae3-4fd2-8865-f2a7ae01b5ac",
    {
      locale: "es-AR",
    }
  );

  checkoutButton.addEventListener("click", () => {
    //console.log('click');
    checkoutButton.remove();

    const orderData = {
      quantity: 1,
      description: "Compra de Gothspooky",
      price: total,
    };

    fetch("http://localhost:3000/api/create_preference", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
      })
      .catch(function () {
        alert("unexpected error");
      });
  });

  function createCheckoutButton(preferenceId) {
    //Initialize the checkout
    const bricksBuilder = mercadopago.bricks();

    const renderComponent = async (bricksBuilder) => {
      //If (window.checkoutButton) checkoutButton.unmount();

      await bricksBuilder.create(
        "wallet",
        "button-checkout", //class/id where the payment button will be displayed
        {
          initialization: {
            preferenceId: preferenceId,
          },
          callbacks: {
            onError: (error) => console.error(error),
            onReady: () => {},
          },
        }
      );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
  }
});

const vistaProductos = document.getElementById("vistaProductos");
const vistatotal = document.getElementById("total");
const count = document.querySelector(".cart-counter");
let total = 0;
let productosCarrito = [];

const calcularTotal = (producto) => {
  return producto.reduce(
    (acum, producto) => (acum += producto.precio * producto.cantidad),
    0
  );
};

function actualizarCarrito() {
  total = calcularTotal(productosCarrito);
  if (total === 0) {
    document.querySelector(
      ".totalAmount"
    ).innerText = `Tu carrito se encuentra vacío`;
  } else {
    document.querySelector(".totalAmount").innerText = `Total: $${total}`;
  }
}

if (localStorage.carrito) {
  let carrito = JSON.parse(localStorage.carrito);
  console.log(carrito);

  carrito.forEach((item, index) => {
    fetch(`/api/prod/${item.id}`)
      .then((res) => res.json())
      .then((producto) => {
        if (producto) {
          const content = document.createElement("div");
          content.innerHTML = `
            <div class="product">
              <div class="tarjeta">
                <img src="/images/products/${producto.imagen[0].nombre}" alt="${producto.nombre}">
                <button class="remove-product">Eliminar</button>
                <button class="decrement-product">-</button>
                <button class="increment-product">+</button>
              </div>
              <div class="product-info">      
                <h4>${producto.nombre}</h4>
              </div>
              <div class="price">
                <h4>$ ${producto.precio} </h4>
                <h4>Cantidad: <span class="product-quantity">${item.cantidad}</span></h4>
              </div>
            </div>
          `;
          productosCarrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: item.cantidad,
          });

          vistaProductos.append(content);
          const incrementButton = content.querySelector(".increment-product");
          const decrementButton = content.querySelector(".decrement-product");
          const quantityElement = content.querySelector(".product-quantity");

          incrementButton.addEventListener("click", () => {
            const index = productosCarrito.findIndex(
              (p) => p.id === producto.id
            );
            if (index !== -1) {
              productosCarrito[index].cantidad++;
              quantityElement.innerText = productosCarrito[index].cantidad;
              actualizarCarrito();
              localStorage.setItem("carrito", JSON.stringify(productosCarrito));
              count.innerText = productoEnElCarrito();
            }
          });

          decrementButton.addEventListener("click", () => {
            const index = productosCarrito.findIndex(
              (p) => p.id === producto.id
            );
            if (index !== -1 && productosCarrito[index].cantidad > 1) {
              productosCarrito[index].cantidad--;
              quantityElement.innerText = productosCarrito[index].cantidad;
              actualizarCarrito();
              localStorage.setItem("carrito", JSON.stringify(productosCarrito));
              count.innerText = productoEnElCarrito();
            }
          });

          const removeButton = content.querySelector(".remove-product");
          removeButton.addEventListener("click", () => {
            const index = productosCarrito.findIndex(
              (p) => p.id === producto.id
            );
            if (index !== -1) {
              productosCarrito.splice(index, 1);
              content.remove();
              actualizarCarrito();
              localStorage.setItem("carrito", JSON.stringify(productosCarrito));
              count.innerText = productoEnElCarrito();
            }
          });
        }
      })
      .then(() => {
        actualizarCarrito();
        count.innerText = productoEnElCarrito();
      });

    const productoEnElCarrito = () => {
      return localStorage.carrito
        ? JSON.parse(localStorage.carrito).reduce(
            (total, prod) => total + prod.cantidad,
            0
          )
        : 0;
    };
  });
}

actualizarCarrito();

const guardarDatos = () => {
  let usuario = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    dni: document.getElementById("dni").value,
    domicilio: document.getElementById("domicilio").value,
    codigopostal: document.getElementById("codigopostal").value
  }
  console.log(usuario)
  
}

