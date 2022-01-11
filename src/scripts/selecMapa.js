let getsVal;
function addBaliza() {
    let asBalizas = new Set();
    let bal = this.value;
    console.log(bal);
    cambioSit();
    
    let valGuardados = localStorage.getItem("balizasGuardadas");
    if (valGuardados == undefined) {
        asBalizas.add(bal);
        document.getElementById("MiLista").innerHTML += "<li>" + bal + "</li>";
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    } else {
        document.getElementById("dGuardadoError").innerHTML="";
        asBalizas = new Set();
        console.log('x: ', JSON.parse(valGuardados));
        getsVal = JSON.parse(valGuardados);
        getsVal.forEach(a => {
            asBalizas.add(a);
        })
        if (!asBalizas.has(bal)) {
            asBalizas.add(bal);

        }
        
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    }
}   
function crearBloque(a) {
    
}
function verBaliza() {
    let sBaliza=this.value;
    cambioVerBaliza();
    document.getElementById("hCabBaliza").textContent=sBaliza;
}