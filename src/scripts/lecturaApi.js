var url = "https://localhost:5001";

var ApiDatos = fetch(`${url}/api/Tiempo`)
    .then(response => response.json())
    .catch(err => console.log(err));