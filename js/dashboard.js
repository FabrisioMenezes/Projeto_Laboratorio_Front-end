
const usuarioLogado = localStorage.getItem('usuarioLogado')
const usuario = JSON.parse(usuarioLogado)

let nome = document.getElementById('nome_usuario')
nome.innerText = `${usuario.nome}`

