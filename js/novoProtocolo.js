function fazPost(url, body){
    console.log("body=", body);
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body))
    request.onload = function() {
        console.log(this.responseText);
    }

    return request.responseText

}
function cadastrar(){
    event.preventDefault();
    let url = " https://biolab-back.herokuapp.com/protocols";
    let titulo = document.getElementById("titulo").value;
    let resenha = document.getElementById("resenha").value;
    let areaPesquisa = document.getElementById("areaPesquisa").value;
    let especie = document.getElementById("especie").value;
    let quantidade = document.getElementById("quantidade").value;
    let matricula = document.getElementById("matricula").value;
    body = {
        "title": titulo,
        "matriculation": matricula,
        "review": resenha,
        "areaId": areaPesquisa,
        "speciesId": especie,
        "quantitySpecies": quantidade
    }
    fazPost(url, body);

}