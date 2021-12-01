function enviarProtocolo(){
    event.preventDefault()
    let comissao = {
        "protocolId": document.getElementById('idProtocolo'),
        "firstAnalystId": document.getElementById('idPrimeiroAnalista'),
        "secondAnalystId": document.getElementById('idSegundoAnalista')
    }
    let div = document.querySelector('.protocoloComissao')
    div.style.display = "none"
    let encaminhar = document.getElementById('encaminhar')
    encaminhar.style.display = "block"
/*
    fetch('https://projeto-biolab.herokuapp.com/analystcommision', {
        method: "PATCH", 
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(comissao)})
        .then(response => response.json())  
        .then(data => console.log(data));

       */
        
}

function encaminhar(){
    event.preventDefault();
    let encaminhar = document.getElementById('encaminhar')
    encaminhar.style.display = "none"

    let div = document.querySelector('.protocoloComissao')
    div.style.display = "block"
}