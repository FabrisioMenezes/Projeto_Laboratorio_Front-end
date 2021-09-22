function fazPost(url, body){
    console.log("body=", body);
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body))
    request.onload = function(){
        console.log(this.responseText);
    }
    return request.responseText
}
function cadastrar(){
    event.preventDefault()
    let url = " https://biolab-back.herokuapp.com/researchers";
    let nome = document.getElementById("nome-completo").value;
    let email = document.getElementById("email-pesquisador").value;
    let confirmaEmail = document.getElementById("confirmar-email-pesquisador").value;
    let senha = document.getElementById("senha-pesquisador").value;
    let confirmaSenha = document.getElementById("confirmar-senha-pesquisador").value;
    let matricula = document.getElementById("matricula-pesquisador").value;
    let areaConhecimento = document.getElementById("conhecimento").value;
    let linkCurriculo = document.getElementById("curriculo-lattes").value;
    body = {
        "name": nome,
        "email": email,
        "password": senha,
        "matriculation": matricula,
        "areaOfInterest": areaConhecimento,
        "curriculumLink": linkCurriculo
    }
    fazPost(url, body);
    alert("Usuário cadastrado com sucesso")
}