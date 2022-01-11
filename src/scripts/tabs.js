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
    cargaBalizasGuardadas();
}
function cargaBalizasGuardadas(){
    let valGuardados = localStorage.getItem("balizasGuardadas");
    if (localStorage.getItem("balizasGuardadas") == null) {
        console.log("No hay ninguna baliza guardada")
        $("#dGuardadoError").html("<h4>No hay ninguna baliza guardada!</h4>");
    } else {
        document.getElementById("dGuardadoError").innerHTML="";
        document.getElementById("MiLista").innerHTML ="";
        console.log('x: ', JSON.parse(valGuardados));
        let getsVal = JSON.parse(valGuardados);
        getsVal.forEach(a=>{
            document.getElementById("MiLista").innerHTML += "<li>" + a + "</li>";
        })
        
    }
}