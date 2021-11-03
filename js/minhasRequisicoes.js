fetch(`https://biolab-back.herokuapp.com/protocols`)
    .then(response => response.json())
    .then(data => {
        let tbody = document.getElementById("body");
        for (let i = 0; i < data.length ; i++){
            let tr = tbody.insertRow()
            let td_title = tr.insertCell();
            let td_creationDate = tr.insertCell();
            let td_status = tr.insertCell();

            td_title.innerText = data[i].title;
            td_creationDate.innerText = data[i].creationDate;
            if (data[i].status == null){
                data[i].status = 'PENDENTE';
            }
            td_status.innerText = data[i].status;

        }

    })

