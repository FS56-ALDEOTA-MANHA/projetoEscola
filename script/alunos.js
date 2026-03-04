tailwind.config = {
  darkMode: 'class'
}


const tablebody = document.querySelector("#table-body")

console.log(tablebody)

const alunos = [
  {
    id: 1,
    nome: "Zenith",
    status: "Ativo"
  },
  {
    id: 2,
    nome: "Felipe",
    status: "Ativo"
  },
  {
    id: 3,
    nome: "Mário",
    status: "Ativo"
  },
  {
    id: 4,
    nome: "Jacqueline",
    status: "Ativo"
  },
  {
    id: 5,
    nome: "Livia",
    status: "Trancado"
  },
]


alunos.map((aluno)=> (
  tablebody.innerHTML += `
    <tr class="hover:bg-pink-100 hover:bg-zinc-800 transition">
            <td class="p-4">${aluno.id}</td>
            <td class="p-4">${aluno.nome}</td>
            <td class="p-4">
              <span class="px-3 py-1 text-sm rounded-full bg-pink-800 text-white">
                ${aluno.status}
              </span>
            </td>
          </tr>
  `
))