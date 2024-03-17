document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });
});

const lista = document.querySelector("#lista");

const arrayLista = [
  { nombre: "Producto 1", id: 1, precio: 250000, imagen: "Aquí va la imagen" },
  { nombre: "Producto 2", id: 2, precio: 550000, imagen: "Aquí va la imagen" },
  { nombre: "Producto 3", id: 3, precio: 780000, imagen: "Aquí va la imagen" },
  { nombre: "Producto 4", id: 4, precio: 250000, imagen: "Aquí va la imagen" },
  { nombre: "Producto 5", id: 5, precio: 550000, imagen: "Aquí va la imagen" },
  { nombre: "Producto 6", id: 6, precio: 780000, imagen: "Aquí va la imagen" },
  { nombre: "Producto 7", id: 7, precio: 250000, imagen: "Aquí va la imagen" },
  { nombre: "Producto 8", id: 8, precio: 550000, imagen: "Aquí va la imagen" },
  { nombre: "Producto 9", id: 9, precio: 780000, imagen: "Aquí va la imagen" },
  {
    nombre: "Producto 10",
    id: 10,
    precio: 780000,
    imagen: "Aquí va la imagen",
  },
  {
    nombre: "Producto 11",
    id: 11,
    precio: 250000,
    imagen: "Aquí va la imagen",
  },
  {
    nombre: "Producto 12",
    id: 12,
    precio: 550000,
    imagen: "Aquí va la imagen",
  },
];

const template = document.querySelector("#template-li").content;
const fragment = document.createDocumentFragment();

arrayLista.forEach((item) => {
  console.log(item);
  template.querySelector(".list .nombre").textContent = item.nombre;
  template.querySelector(".list #id").textContent = item.id;
  template.querySelector(".list #precio").textContent = item.precio;
  template.querySelector(".list #imagen").textContent = item.imagen;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);

//Forma de insertar elementos con createElement
// const fragment = document.createDocumentFragment(); //Lo creamos para evitar el reflow

// arrayLista.forEach((item) => {
//   const li = document.createElement("li");
//   li.classList.add("list");
//   const b = document.createElement("b");
//   b.textContent = "Nombre: ";
//   const span = document.createElement("span");
//   span.classList.add("text-danger");
//   span.textContent = item;
//   li.appendChild(b);
//   li.appendChild(span);
//   fragment.appendChild(li);
// });

// lista.appendChild(fragment);

//Forma de instertar elementos con innerHtml (no recomendado)
// let fragment = "";

// arrayLista.forEach((item) => {
//   fragment += `<li class="list">
//         <b>Nombre: </b> <span class="text-danger">${item}</span>
//     </li> `;
// });

// lista.innerHTML = fragment;
