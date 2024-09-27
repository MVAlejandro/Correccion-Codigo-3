// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/zapato-rojo.jpg"}
] // Se modifica la referencia a cada imagen

const li = document.getElementById("lista-de-productos")
const $i = document.querySelector('.input');

const displayProductos = (productos) => { // Se declara la función faltante
  for (let i = 0; i < productos.length; i++) {
    const d = document.createElement("div") // Se cambia la declaración de la variable por const para coincidir con los demás elementos del HTML
    d.classList.add("producto")

    const ti = document.createElement("p") // Se cambia la declaración de la variable por const para coincidir con los demás elementos del HTML
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
    
    const imagen = document.createElement("img"); // Se cambia la declaración de la variable por const para coincidir con los demás elementos del HTML
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d)
  }
};

displayProductos(productos)
const botonDeFiltro = document.getElementById("btn-filtrar"); // Se cambia el llamado por id

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  