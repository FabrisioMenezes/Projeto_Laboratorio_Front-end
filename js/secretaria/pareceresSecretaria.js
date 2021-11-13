fetch(`https://projeto-biolab.herokuapp.com/protocols/status/2`)
    .then(response => response.json())
    .then(data => {
        let tbody = document.getElementById("body");
        for (let i = 0; i < data.length ; i++){
            let tr = tbody.insertRow()
            let td_title = tr.insertCell();
            let td_name = tr.insertCell();
            let td_creationDate = tr.insertCell();
            let td_status = tr.insertCell();

            td_title.innerText = data[i].title;
            td_name.innerText = data[i].name;
            td_creationDate.innerText = data[i].creationDate;
            td_status.innerText = data[i].status;
        }

    })

fetch(`https://projeto-biolab.herokuapp.com/protocols/status/3`)
    .then(response => response.json())
    .then(data => {
        let tbody = document.getElementById("body");
        for (let i = 0; i < data.length ; i++){
            let tr = tbody.insertRow()
            let td_title = tr.insertCell();
            let td_name = tr.insertCell();
            let td_creationDate = tr.insertCell();
            let td_status = tr.insertCell();

            td_title.innerText = data[i].title;
            td_name.innerText = data[i].name;
            td_creationDate.innerText = data[i].creationDate;
            td_status.innerText = data[i].status;
        }

    })
