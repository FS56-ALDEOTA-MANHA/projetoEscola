

function login () {
const email = document.getElementById("email").value
const password = document.getElementById("password").value

console.log(email)
console.log(password)

if (email === "queiroz.14@hotmail.com" && password === "1234") {
  alert("Login efetuado com sucesso")
  window.location.href = "/pages/dashboard.html"
} else {
  alert("Email ou senha incorretos")
}
}