async function fazerLogin() {
    event.preventDefault()
    let user = document.getElementById("Cusuario").value;
    let password = document.getElementById("Csenha").value;
    if (user === "") {
        document.getElementById("respostaUsuario").focus
        alert("Campo de Usuario não pode estar vazio")
        return false;
    }
    if (password === "") {
        document.getElementById("Csenha").focus
        alert("Campo de Senha não pode estar vazio")
        return false;
    }
    console.log(user)
    console.log(password)
    await fetch(`https://projeto-biolab.herokuapp.com/researchers?email=${user}&password=${password}`)
        .then(async response => {
            if (response.status === 400 || response.status === 404) {
                console.log("usuario não encontrado")
                alert("Usuario não encontrado")
            } else if (response.status === 200) {
                let resposta = await response.json()
                let usuario = {
                    'nome': resposta.name,
                    'matricula': resposta.matriculation
                }
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
                window.location.replace("dashboardSecretaria.html")

            }
        })
}


