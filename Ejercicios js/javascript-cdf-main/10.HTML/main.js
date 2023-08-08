const divProyectos = document.querySelector("#proyecto");
console.log(divProyectos);
const IJS = "images/html5.png";
const IHTML = "images/ps.png";
const ICSS = "images/ps.png";

//creo un obj con info de la card
const arrayDeObj = [
  {
    img: "images/memes.png",
    titulo: "Editor de Memes",
    descripcion: "Aplicación para editar memes a partir de una imagen",
    iconos: [IJS, IHTML, ICSS],
  },
  {
    img: "images/gastos.png",
    titulo: "Ahorradas",
    descripcion: "Aplicación para contabilizar gastos",
    iconos: [IJS, IHTML, ICSS],
  },
  {
    img: "images/reuniones.png",
    titulo: "Reuniones",
    descripcion: "Aplicación para administrar reuniones o turnos",
    iconos: [IJS, IHTML, ICSS],
  },
  {
    img: "images/app.png",
    titulo: "ToDoApp",
    descripcion: "Aplicación para administrar tareas",
    iconos: [IJS, IHTML, ICSS],
  },
  {
    img: "images/peli.png",
    titulo: "Buscador de peliculas",
    descripcion: "Aplicación para buscar películas de una API",
    iconos: [IJS, IHTML, ICSS],
  },
  {
    img: "images/Polaroid.png",
    titulo: "Fotograsfía",
    descripcion: "Galería de fotos",
    iconos: [IJS, IHTML, ICSS],
  },
];

const mostarCards = arrayDeObj.map((arrayDeObj) => {
  divProyectos.innerHTML += `
  <div class="recuadro">
  <a class="recuadro2" href="#Portfolio">
    <img
      src=${arrayDeObj.img}
      alt="portafolio"
      width="100%"
    />
    ${arrayDeObj.titulo}</a
  >
  <p>${arrayDeObj.descripcion}</p>
  <div>
    <img src=${arrayDeObj.iconos[0]} alt="logo html5" class="logos-card" />
    <img
      src=${arrayDeObj.iconos[1]}
      alt="logo photoshop"
      class="logos-card"
    />
    <img
      src=${arrayDeObj.iconos[2]}
      alt="logo photoshop"
      class="logos-card"
    />
  </div>
</div>
`;
});

const setCards = () => {
  if (divProyectos.style.display === "none") {
    divProyectos.style.display = "flex";
  } else {
    divProyectos.style.display = "none";
  }
};

const btn = document.querySelector(".btn-m-o");
btn.addEventListener("click", setCards);
// para los iconos obtener el
