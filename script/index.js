let usuarios = [
  {
    id: 1,
    nome: "Nayara Queiroz",
    email: "queiroz.14@hotmail.com",
    senha: "1234"
  },
  {
    id: 2,
    nome: "Zenith",
    email: "zenith@teste.com",
    senha: "4567"
  },
  {
    id: 3,
    nome: "Mario",
    email: "mario@teste.com",
    senha: "78910"
  },
  {
    id: 4,
    nome: "Yasmin",
    email: "yasmin@teste.com",
    senha: "123"
  },
]

function login () {
const email = document.getElementById("email").value
const password = document.getElementById("password").value

console.log(email)
console.log(password)

let usuarioValido = false
  for (let i = 0; i < usuarios.length; i++) {
    if (email === usuarios[i].email && password === usuarios[i].senha) {
      usuarioValido = true
      alert("Login efetuado com sucesso")
      window.location.href = "/pages/dashboard.html"
    }
  }
  if (!usuarioValido) {
    alert("Email ou senha incorretos")
  }
  

}