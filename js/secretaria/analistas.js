fetch(`https://biolab-back.herokuapp.com/researchers/actives`)
    .then(response => response.json())
    .then(data => {
        let tbody = document.getElementById("body");
        for (let i = 0; i < data.length ; i++){
            let tr = tbody.insertRow()
            let td_name = tr.insertCell();
            let td_areaOfInterest = tr.insertCell();
            let td_matriculation = tr.insertCell();

            td_name.innerText = data[i].name;
            td_areaOfInterest.innerText = data[i].areaOfInterest;
            td_matriculation.innerText = data[i].matriculation;
        }

    })
