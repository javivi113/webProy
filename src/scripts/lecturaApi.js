var url = "https://localhost:5001";
function recogerTodosDatos() {
    var ApiDatos = fetch(`${url}/api/Tiempo`)
    .then(response =>{        
        return response.json();
    } )
    .catch(err => console.log(err));
    
}
function recogerDatosLocalidad(loc) {
    var ApiDatos = fetch(`${url}/api/Tiempo/${loc}`)
    .then(response => response.json())
    .catch(err => console.log(err));
    return ApiDatos;
}
window.recogerTodosDatos=recogerTodosDatos;
window.recogerDatosLocalidad=recogerDatosLocalidad;