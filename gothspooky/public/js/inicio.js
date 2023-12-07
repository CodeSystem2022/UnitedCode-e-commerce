const botonComprar = document.querySelectorAll(".buttonroducto-detalles");
const carrito = [];
const vistageneral = document.getElementById("probando")
console.log(botonComprar);

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
    const producto = e.target.parentElement;
    //console.log(e.target.parentElement);
    vistageneral.innerHTML = ""
    carrito.push({
      quantity: 1,
      title: producto.querySelector("h3").textContent,
      price: producto.querySelector("p").textContent,
      imagen: producto.querySelector("img"),
    });
    console.log(carrito);
    
    carrito.forEach((products) => {
    const content = document.createElement("div");
    
    content.innerHTML = `
      <div>
          <div class="product-info">      
              <h4>${products.title}</h4>
          </div>
          <div class="price">
          <h4> $ ${products.price} </h4>
          </div>
      </div>
      <hr>
      `;
    vistageneral.append(content);
    saveLocal();
})
  });

  const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify(carrito))
  };
  
  
});


