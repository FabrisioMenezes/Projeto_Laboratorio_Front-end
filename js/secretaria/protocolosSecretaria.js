fetch(`https://projeto-biolab.herokuapp.com/protocols/status/0`)
    .then(response => response.json())
    .then(data => {
            let tbody = document.getElementById("body");
                for (let i = 0; i < data.length ; i++){
                    let tr = tbody.insertRow()
                    let td_id = tr.insertCell();
                    let td_matriculation = tr.insertCell();
                    let td_creationDate = tr.insertCell();
                    let td_status = tr.insertCell();

                    td_id.innerText = data[i].id;
                    td_matriculation.innerText = data[i].matriculation;
                    td_creationDate.innerText = data[i].creationDate;
                    td_status.innerText = data[i].status;
                }

    })

