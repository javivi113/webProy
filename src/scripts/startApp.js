let NuevaSesion = localStorage.getItem("balizasGuardadas");
if (NuevaSesion != undefined || NuevaSesion != null){
    setTimeout(cambioSit,100);
}