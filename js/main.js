
function fazerLogin(){
    event.preventDefault()
    let user = document.getElementById("Cusuario").value;
    let password = document.getElementById("Csenha").value;
    if(user === ""){
        document.getElementById("respostaUsuario").focus
        alert("Campo de Usuario não pode estar vazio")
        return false;
    }
    if(password === ""){
        document.getElementById("Csenha").focus
        alert("Campo de Senha não pode estar vazio")
        return false;
    }
    console.log(user)
    console.log(password)
    fetch(`https://biolab-back.herokuapp.com/researchers?email=${user}&password=${password}`)
    .then(response =>{
        if(response.status === 400 ||  response.status === 404){
            console.log("usuario não encontrado")
            alert("Usuario não encontrado")
        }
        else if(response.status === 200){
            alert("usuario Encontrado")
            window.location.replace("dashboard.html")

        }
    })
}


