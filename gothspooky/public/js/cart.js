const vistaProductos = document.getElementById("vistaProductos");
<<<<<<< Updated upstream
// const preciototal = document.getElementById("total");
// let total = 0;
// const vistageneral = document.getElementById("probando")

function tarjetaCarrito() {
  const prendas = JSON.parse(localStorage.getItem("carrito"));
  console.log(prendas);
  prendas.forEach((element) => {
    const nuevaPrenda = document.createElement("div");
    nuevaPrenda.classList = "prenda-carrito";
    nuevaPrenda.innerHTML = `
      <h4>${element.title}</h4>
      <h4>$${element.price}</h4>
    `;
    vistaProductos.append(nuevaPrenda);
  });
}

tarjetaCarrito();

// productos.forEach((product) => {
//   console.log(product)
//   const prendas = JSON.parse(localStorage.getItem("carrito"));
//   console.log(prendas)
//   const content = document.createElement("div");
//   content.innerHTML = `
//     <div class="product">
//         <div class="tarjeta">
//             <img class="product-img" src="${product.img}">
//             <button class="remove-product">Eliminar</button>
//         </div>
//         <div class="product-info">
//             <h4>${product.productName}</h4>
//         </div>
//         <div class="price">
//         <h4> $ ${product.price} </h4>
//         </div>
//     </div>
//     <hr>
//     `;
//   vistaProductos.append(content);

//   const removeButton = content.querySelector(".remove-product");
//   removeButton.addEventListener("click", () => {
//     content.remove();
//     total -= product.price;
//     totalElementos.innerHTML = `<h3>Total: $ ${total}</h3>`;

//     if (total === 0) {
//       vistaProductos.innerHTML = "<h3>Tu carrito se encuentra vacío</h3>";
//     }
//   });

//   total += product.price;
// });

// const totalElementos = document.createElement("div");
// totalElementos.innerHTML = `<h3>Total: $ ${total}</h3>`;
// preciototal.append(totalElementos);

// if (total === 0) {
//   vistaProductos.innerHTML = `<h3>Tu carrito se encuentra vacío</h3>`;
// }
=======

function tarjetaCarrito() {
  const prendas = JSON.parse(localStorage.getItem("carrito"));
  console.log(prendas);
  prendas.forEach((element) => {
    const nuevaPrenda = document.createElement("div");
    nuevaPrenda.classList = "prenda-carrito";
    nuevaPrenda.innerHTML = `
      <img src="${element.img}">
      <img src="images/products/producto1.jpg" alt="Articulo 1">
      <h4>${element.title}</h4>
      <h4>$${element.price}</h4>
    `;
    vistaProductos.append(nuevaPrenda);
  })};
    tarjetaCarrito();
// window.addEventListener('load', () => {
//   //console.log('Se lanzo');

//   const qs = (tag) => {
//     return document.querySelector(tag)
//   }
  
//   const checkoutButton = qs("#checkout-btn");
//   const preciototal = qs("#total");

//   const vistaProductos = document.getElementById("vistaProductos");
//   let total = 0;

//   productos.forEach((product) => {
//     const content = document.createElement("div");
//     content.innerHTML = `
  
//       <div class="product">
//           <div class="tarjeta">
//               <img class="product-img" src="${product.img}">
//               <button class="remove-product">Eliminar</button>
//           </div>
//           <div class="product-info">      
//               <h4>${product.productName}</h4>
//           </div>
//           <div class="price">
//           <h4> $ ${product.price} </h4>
//           </div>
          
          
//       </div>
      
//       `;
      
//     vistaProductos.append(content);
    

  
//     const removeButton = content.querySelector(".remove-product");
//     removeButton.addEventListener("click", () => {
//       content.remove();
//       total -= product.price;
//       totalElementos.innerHTML = `<h3>Total: $ ${total}</h3>`;

//       if (total === 0) {
//         vistaProductos.innerHTML = "<h3>Tu carrito se encuentra vacío</h3>";
//       }
//     });

//     total += product.price;

//   });

//   const totalElementos = document.createElement("div");
//   totalElementos.innerHTML = `<h3>Total: $ ${total}</h3>`;
//   preciototal.append(totalElementos);

//   if (total === 0) {
//     vistaProductos.innerHTML = `<h3>Tu carrito se encuentra vacío</h3>`;
//   }
//   //mp
//   const mercadopago = new MercadoPago("", {
//   locale: "es-AR", 
//   });
      
//   checkoutButton.addEventListener("click", () => {
//     //console.log('click');
//     checkoutButton.remove();

//     const orderData = {
//         quantity: 1,
//         description: "Compra de Gothspooky",
//         price: total,
//         };

//     fetch("http://localhost:3000/api/create_preference",{
//           method: "POST",
//           mode: "cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(orderData),
//         })
//         .then(function (response){
//           return response.json();
//         })
//         .then(function (preference){
//           createCheckoutButton(preference.id);
//         })
//         .catch(function () {
//             alert("unexpected error");
//         });
//     });

//       function createCheckoutButton(preferenceId) {
//       //Initialize the checkout
//       const bricksBuilder = mercadopago.bricks();

//       const renderComponent = async (bricksBuilder) => {
//         //If (window.checkoutButton) checkoutButton.unmount();

//         await bricksBuilder.create(
//           "wallet",
//           "button-checkout", //class/id where the payment button will be displayed
//           {
//             initialization: {
//               preferenceId: preferenceId,
//             },
//             callbacks: {
//               onError: (error) => console.error(error),
//               onReady: () => {},
//             },
//           }
//         );
//       };
//       window.checkoutButton = renderComponent(bricksBuilder);    
    
//     };
>>>>>>> Stashed changes

// carrito.forEach((products) => {
//   const content = document.createElement("div");

<<<<<<< Updated upstream
//   content.innerHTML = `
//   <div>
//       <div class="product-info">
//           <h4>${products.title}</h4>
//       </div>
//       <div class="price">
//       <h4> $ ${products.price} </h4>
//       </div>
//   </div>
//   <hr>
//   `;
//   vistageneral.append(content);
//   console.log(JSON.parse(localStorage.getItem("carrito")))
// });
=======
// });

>>>>>>> Stashed changes
