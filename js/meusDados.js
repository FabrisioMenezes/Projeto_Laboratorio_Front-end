const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
fetch(`https://projeto-biolab.herokuapp.com/researchers/${usuarioLogado.matricula}`)
.then((response) => response.json())
.then((data) => {
    console.log(data)
    document.getElementById("nome").value = data.name;
    document.getElementById("email").value = data.email;
    document.getElementById("senha").value = data.password;
    document.getElementById("curriculo").value = data.curriculumLink;
    document.getElementById("areaInteresse").value = data.areaOfInterest;
}) ;