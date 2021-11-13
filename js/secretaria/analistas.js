fetch(`https://projeto-biolab.herokuapp.com/researchers/actives`)
    .then(response => response.json())
    .then(data => {
        let tbody = document.getElementById("body");
        for (let i = 0; i < data.length ; i++){
            let tr = tbody.insertRow()
            let td_name = tr.insertCell();
            let td_areaOfInterest = tr.insertCell();
            let td_matriculation = tr.insertCell();

            td_name.innerText = data[i].name;

            if (data[i].areaOfInterest === "1"){
                data[i].areaOfInterest = 'Biomedicina'
            }
            if(data[i].areaOfInterest === "2"){
                data[i].areaOfInterest.value = "Farmácia"
            }
            if(data[i].areaOfInterest === "3"){
                data[i].areaOfInterest.value = "Biotecnologia"
            }

            td_areaOfInterest.innerText = data[i].areaOfInterest;
            td_matriculation.innerText = data[i].matriculation;
        }

    })
