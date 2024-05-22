//Mostrar datos 



function actualizarCarrito(){
    let items = JSON.parse(localStorage.getItem('items')) || [];

    htmlnuevo="";
    items.forEach((item)=>{
        htmlnuevo=htmlnuevo+
        `<div class="productosencarro">
            <h1> ${item.titulo} </h1>
            <p> ${item.precio} </p>
            <img src="${item.imagen}">
            <p></p>
            <button onclick="borrarNota()">Borrar</button>
        </div>`
    });

    contenedor=document.getElementById("items");
    contenedor.innerHTML=htmlnuevo;
    console.log(items);
    console.log(items[0].titulo);
}



window.addEventListener('load', () => {
    actualizarCarrito();
});

// Borrar todo lo del carro
function borrarcarro() {
    const botonBorrar = document.getElementById('borrar');
    botonBorrar.addEventListener('click', () => {
      var productos = JSON.parse(localStorage.getItem("items") || "[]");
      productos.splice(0, productos.length); // Eliminar todos los elementos del arreglo
      localStorage.setItem("items", JSON.stringify(productos));
      // Actualizar la página para reflejar los cambios
      location.reload();
    });
}



/*
function actualizarCarrito(){
    let items = JSON.parse(localStorage.getItem('items')) || [];

    htmlnuevo="";
    items.forEach((item)=>{
        htmlnuevo=htmlnuevo+
        `<div class="productosencarro">
            <h1> ${item.titulo} </h1>
            <p> ${item.precio} </p>
            <img src="${item.imagen}">
            <p></p>
            <button onclick="borrarNota(${item})">Borrar</button>
        </div>`
    });

    contenedor=document.getElementById("items");
    contenedor.innerHTML=htmlnuevo;
    console.log(items);
}

window.addEventListener('load', () => {
    actualizarCarrito();
});

// Borrar todo lo del carro
function borrarcarro() {
    const botonBorrar = document.getElementById('borrar');
    botonBorrar.addEventListener('click', () => {
      productos.splice(0, productos.length); // Eliminar todos los elementos del arreglo
      localStorage.setItem("items", JSON.stringify(productos));
      // Actualizar la página para reflejar los cambios
      location.reload();
    });
  }
*/
  

/*
// Borrar todo lo del carro
function borrarcarro(){
    const botonBorrar = document.getElementById('borrar');
      botonBorrar.addEventListener('click', () => {
        var items = JSON.parse(localStorage.getItem("items") || "[]");
        items.splice(0, items.length); // Eliminar todos los elementos del arreglo
        localStorage.setItem("items", JSON.stringify(items));
        
        // Actualizar la página para reflejar los cambios
        location.reload();
      });
}
*/

/*
function actualizarCarrito(){
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    htmlnuevo="";
    productos.forEach((element, i)=>{
        htmlnuevo=htmlnuevo+
        `<div class="productosencarro">
            <h1> ${(productos[i].titulo).textContent} </h1>
            <p> ${(productos[i].precio).textContent} </p>
            <img src="${(productos[i].imagen).src}">
            <p></p>
            <button onclick="borrarNota(${i})">Borrar</button>
        </div>`
    });

    contenedor=document.getElementById("items");
    contenedor.innerHTML=htmlnuevo;
    console.log(productos);
}

window.addEventListener('load', () => {
    actualizarCarrito();
  });


// Borrar todo lo del carro
function borrarcarro(){
    const botonBorrar = document.getElementById('borrar');
      botonBorrar.addEventListener('click', () => {
        var productos = JSON.parse(localStorage.getItem("items") || "[]");
        productos.splice(0, productos.length); // Eliminar todos los elementos del arreglo
        localStorage.setItem("items", JSON.stringify(productos));
        
        // Actualizar la página para reflejar los cambios
        location.reload();
      });
  }
  */