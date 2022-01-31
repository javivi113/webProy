document.getElementById("aInicio").addEventListener("click", cambioIni);
document.getElementById("aMisSitios").addEventListener("click", cambioSit);
document.getElementById("aApi").addEventListener("click", apiInicioSes);
$("#dMisSitios").hide();
$("#dVisializar").hide();
$(".inicioPanel").hide();
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
    if (localStorage.getItem("balizasGuardadas") == null) $("#dGuardadoError").html("<h4>No hay ninguna baliza guardada!</h4>");
    else {
        document.getElementById("dGuardadoError").innerHTML = "";
        document.getElementById("dBalizasGuar").innerHTML = "";
        GuardarDatosApi();
    }
}
function apiInicioSes() {
    $(".inicioPanel").slideToggle(100);
//window.location=`${url}/api/Tiempo`
}

//# sourceMappingURL=index.1955e8a8.js.map
