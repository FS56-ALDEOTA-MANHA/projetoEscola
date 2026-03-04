let carrossel = document.getElementById('carrossel')
let listanavbar = document.getElementById('lista-navbar')
let listanavbar2 = document.getElementById('lista-navbar2')

let cursosPlus = [
  {
    id: 1,
    nome: "Crie uma landing page com HTML, CSS e JS",
    data: "11/02/2026",
    horario: "18:00",
    sede: "Aldeota",
    img: "https://digitalcollege.com.br/wp-content/uploads/2024/01/sou-colleger.png",
  },
  {
    id: 2,
    nome: "Inglês para Devs",
    data: "11/02/2026",
    horario: "18:00",
    sede: "Bezerra",
    img: "https://digitalcollege.com.br/wp-content/uploads/2024/01/sou-colleger.png",
  },
  {
    id: 3,
    nome: "Crie uma API em PHP",
    data: "12/02/2026",
    horario: "18:00",
    sede: "Aldeota",
    img: "https://digitalcollege.com.br/wp-content/uploads/2024/01/sou-colleger.png",
  },
  {
    id: 4,
    nome: "Escalone suas aplicações",
    data: "13/02/2026",
    horario: "18:00",
    sede: "Sul",
    img: "https://digitalcollege.com.br/wp-content/uploads/2024/01/sou-colleger.png",
  },
  {
    id: 4,
    nome: "Escalone suas aplicações",
    data: "13/02/2026",
    horario: "18:00",
    sede: "Sul",
    img: "https://digitalcollege.com.br/wp-content/uploads/2024/01/sou-colleger.png",
  },
  
]

for (let i = 0; i < cursosPlus.length; i++) {
  carrossel.innerHTML +=  `
  <div id="slide${cursosPlus[i].id}" class="carousel-item relative w-full flex justify-between">
    <div class="w-1/2 flex flex-col justify-center pl-50">
    <div class="flex-1 pt-20">
      <h1 class="font-bold text-4xl text-rose-500 pb-3">${cursosPlus[i].nome}</h1>
      <div>
        <span>${cursosPlus[i].data}</span>
        <span>${cursosPlus[i].horario}</span>
      </div>
      <span class="font-bold">Digital College ${cursosPlus[i].sede}</span>
      </div>
    </div>
    <img src=${cursosPlus[i].img} class="w-1/2 w-[600px] h-[400px] pr-50" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform         justify-between">
      <a href="#slide${cursosPlus[i].id - 1}" class="btn btn-circle">❮</a>
      <a href="#slide${i === cursosPlus.length - 1 ? cursosPlus[0].id:cursosPlus[i].id + 1}" class="btn btn-circle">❯</a>
    </div>
  </div>
  `

  
}

let navegacao = [
  {
    nome: "Quem Somos",
  },
  {
    nome: "Nossos cursos",
    submenu: ["Formações", "Curta e Média Duração"]
  },
  {
    nome: "Pós Graduação",
    submenu: ["MBA em negócios", "MBA em tecnologia"]
  },
  {
    nome: "Entrar",
    link: "../pages/index.html"
  },
]


let htmlNav = ""

navegacao.forEach((obj)=> {

  if (obj.submenu) {
    htmlNav +=  `<li class="text-white">
        <details>
          <summary >${obj.nome}</summary>
          <ul class="p-2 bg-black w-40 z-1">
            ${obj.submenu.map((submenu) => (`<li><a>${submenu}</a></li>`)).join("")}
          </ul>
        </details>
      </li>`
  } else if (obj.nome === "Entrar") {
    htmlNav += `<li class="text-white"><a class="bg-pink-800 p-2 px-4 ml-3 rounded cursor-pointer" href="${obj.link}">${obj.nome}</a></li>`
  } else {
    htmlNav += `<li class="text-white"><a>${obj.nome}</a></li>`
  }
})


listanavbar.innerHTML = htmlNav
listanavbar2.innerHTML = htmlNav