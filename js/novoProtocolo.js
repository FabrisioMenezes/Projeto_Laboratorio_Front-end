function fazPost(url, body){
    console.log("body=", body);
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body))
    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastrarProtocolo(){
    let matriculaUsuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    let url = " https://projeto-biolab.herokuapp.com/protocols";
    let titulo = document.getElementById("titulo").value;
    let resenha = document.getElementById("resenha").value;
    let status = 0;
    let areaPesquisa = document.getElementById("areaPesquisa").value;
    let especie = document.getElementById("especie").value;
    let quantidade = document.getElementById("quantidade").value;
    body = {
        "title": titulo,
        "matriculation": matriculaUsuario.matricula,
        "status": status,
        "review": resenha,
        "areaId": areaPesquisa,
        "speciesId": especie,
        "quantitySpecies": quantidade
    }
    fazPost(url, body);
    limparCampos();
    alert("Protocolo Cadastrado!")

}

function limparCampos(){
    titulo = document.getElementById("titulo").value = "";
    resenha = document.getElementById("resenha").value = "";
    areaPesquisa = document.getElementById("areaPesquisa").value = "";
    especie = document.getElementById("especie").value = "";
    quantidade = document.getElementById("quantidade").value = "";
}