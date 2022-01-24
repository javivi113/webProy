var url = "https://localhost:5001";
function recogerDatosLocalidad(loc) {
    var ApiDatos = fetch(`${url}/api/Tiempo/${loc}`).then((response)=>response.json()
    ).catch((err)=>console.log(err)
    );
    return ApiDatos;
}
function GuardarDatosApi() {
    var valoresLocalSt = localStorage.getItem("balizasGuardadas");
    if (valoresLocalSt != undefined || valoresLocalSt != null) {
        window.arrayLoc = JSON.parse(valoresLocalSt);
        if (arrayLoc.length == 1) fetch(`${url}/api/Tiempo/${arrayLoc[0]}`).then((response)=>response.json()
        ).then((b)=>{
            console.log("*********");
            console.log(`${url}/api/Tiempo/${arrayLoc[0]}`);
            console.log(b.municipio);
            console.log("*********");
            crearBloque(b.municipio, b.temperatura, b.descripcionTiempo, b.pathImg, b.velocidadViento, b.precipitaciones);
        }).catch((err)=>console.log(err)
        );
        else arrayLoc.forEach((a)=>{
            fetch(`${url}/api/Tiempo/${a}`).then((response)=>response.json()
            ).then((b)=>{
                console.log("*********");
                console.log(`${url}/api/Tiempo/${a}`);
                console.log(b.municipio);
                console.log("*********");
                crearBloque(b.municipio, b.temperatura, b.descripcionTiempo, b.pathImg, b.velocidadViento, b.precipitaciones);
            }).catch((err)=>console.log(err)
            );
        });
    } else console.log("no hay nada");
}
//setInterval(ponerDatosApi,1000)
window.recogerDatosLocalidad = recogerDatosLocalidad;
window.GuardarDatosApi = GuardarDatosApi;

//# sourceMappingURL=index.66c64576.js.map
