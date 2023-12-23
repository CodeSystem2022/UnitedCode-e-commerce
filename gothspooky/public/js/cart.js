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
let total = 0;

if (localStorage.carrito) {
  let carrito = JSON.parse(localStorage.carrito);
  console.log(carrito);

  carrito.forEach((item, index) => {
    fetch(`/api/prod/${item.id}`)
      .then((res) => res.json())
      .then((producto) => {
        const content = document.createElement("div");
        content.innerHTML = `
          <div class="product">
            <img src="/images/products/${producto.imagen[0].nombre}" alt="${
          producto.nombre
        }">
            <button class="remove-product">Eliminar</button>
            <div class="product-info">      
              <h4>${producto.nombre}</h4>
            </div>
            <div class="price">
              <h4> $ ${producto.precio} </h4>
              <h4>${item.cantidad} </h4>
              <h4>${parseFloat(producto.precio * item.cantidad, 2).toFixed(
                2
              )} </h4>
            </div>
          </div>
        `;

        vistaProductos.append(content);

        const removeButton = content.querySelector(".remove-product");
        removeButton.addEventListener("click", () => {
          content.remove();
        });
      });
  });
}
