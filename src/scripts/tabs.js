document.getElementById("aInicio").addEventListener("click", cambioIni);
document.getElementById("aMisSitios").addEventListener("click", cambioSit);
$("#dMisSitios").hide();
$("#dVisializar").hide();
function cambioIni(){
    $("#dInicio").show();
    $("#dMisSitios").hide();
}
function cambioSit(){
    $("#dInicio").hide();
    $("#dMisSitios").show();
}