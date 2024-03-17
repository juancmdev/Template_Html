const lista = document.querySelector("#lista");

const arrayLista = ["item1", "item2", "item3", "item4"];

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
