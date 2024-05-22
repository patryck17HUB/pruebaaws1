// Obtener todos los botones, imagenes, etc

const botones = document.querySelectorAll('.productos button');
let productos = JSON.parse(localStorage.getItem("items") || "[]");

botones.forEach((boton) => {
  boton.addEventListener('click', (event) => {

    let imagenes = document.getElementById("productos").getElementsByTagName("img");
    let titulos = document.getElementById("productos").getElementsByTagName("h4");
    let precios = document.getElementById("productos").getElementsByTagName("h3");

    // Obtener el número del botón
    const numeroBoton = event.target.id.replace('boton', '');
    let imagen = imagenes[numeroBoton-1];
    let titulo = titulos[numeroBoton-1];
    let precio = precios[numeroBoton-1];

    // Agregar el producto al carrito
    productos.push({ titulo: titulo.textContent, precio: precio.textContent, imagen: imagen.src });
    localStorage.setItem("items", JSON.stringify(productos)); 
  });
});

function borrarcarro(){
  const botonBorrar = document.getElementById('borrar');
    botonBorrar.addEventListener('click', () => {
      productos.splice(0, productos.length); // Eliminar todos los elementos del arreglo
      localStorage.setItem("items", JSON.stringify(productos));
      
      // Actualizar la página para reflejar los cambios
      location.reload();
    });
}
