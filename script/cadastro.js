const cep = document.getElementById("cep")
const logradouro = document.getElementById("logradouro")
const bairro = document.getElementById("bairro")
const localidade = document.getElementById("localidade")
const uf = document.getElementById("uf")
const button = document.getElementById("cadastrar")

console.log(cep)

cep.onblur = async function () {
  cepValue = cep.value.replace(/-/g, '')

  if (cepValue.length !== 8) return

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
      const dados = await resposta.json() 
      console.log(dados) 
      
      logradouro.value = dados.logradouro
      bairro.value = dados.bairro
      uf.value = dados.uf
      localidade.value = dados.localidade

    } catch (error) {
      console.error(error)
    }
}
