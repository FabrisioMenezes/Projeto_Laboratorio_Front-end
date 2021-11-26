let matricula = JSON.parse(localStorage.getItem('usuarioLogado'))

fetch(`https://projeto-biolab.herokuapp.com/protocols/matriculation/${matricula.matricula}`)
    .then(response => response.json())
    .then(data => {
        let tbody = document.getElementById("body");
        for (let i = 0; i < data.length ; i++){
            let tr = tbody.insertRow()
            let td_title = tr.insertCell();
            let td_creationDate = tr.insertCell();
            let td_status = tr.insertCell();

            if (data[i].status == null || data[i].status === "PENDING"){
                data[i].status = 'PENDENTE';
            }
            if (data[i].status === "ANALYSING"){
                data[i].status = 'EM ANÁLISE';
            }
            if (data[i].status === "APPROVED"){
                data[i].status = 'APROVADO';
            }
            if (data[i].status === "REPROVED"){
                data[i].status = 'REPROVADO';
            }

            td_title.innerText = data[i].title;
            td_creationDate.innerText = data[i].creationDate;
            td_status.innerText = data[i].status;

        }
    })

