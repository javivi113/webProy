document.getElementById("aInicio").addEventListener("click", cambioIni);
document.getElementById("aMisSitios").addEventListener("click", cambioSit);
$("#dMisSitios").hide();
$("#dVisializar").hide();
function cambioIni() {
    $("#dInicio").show();
    $("#dMisSitios").hide();
    colocarMarcadores();
    //location.reload();
}
function cambioVerBaliza() {
    $("#dInicio").hide();
    $("#dMisSitios").hide();
    $("#dVisializar").show();
}
function cambioSit() {
    $("#dInicio").hide();
    $("#dMisSitios").show();
    let valGuardados = localStorage.getItem("balizasGuardadas");
    if (localStorage.getItem("balizasGuardadas") == null) {
        $("#dGuardadoError").html("<h4>No hay ninguna baliza guardada!</h4>");
    } else {
        document.getElementById("dGuardadoError").innerHTML = "";
        document.getElementById("dBalizasGuar").innerHTML = "";F
        GuardarDatosApi();
    }
}
/*
function cargaBalizasGuardadas() {
    let valGuardados = localStorage.getItem("balizasGuardadas");
    if (localStorage.getItem("balizasGuardadas") == null) {
        $("#dGuardadoError").html("<h4>No hay ninguna baliza guardada!</h4>");
    } else {
        document.getElementById("dGuardadoError").innerHTML = "";
        document.getElementById("dBalizasGuar").innerHTML = "";
        let getsVal = JSON.parse(valGuardados);
        getsVal.forEach(a => {
            crearBloque(a);
        })
    }
}*/
