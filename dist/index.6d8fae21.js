let getsVal;
function addBaliza() {
    let asBalizas = new Set();
    let bal = this.value;
    console.log(bal);
    cambioSit();
    let valGuardados = localStorage.getItem("balizasGuardadas");
    if (valGuardados == undefined) {
        asBalizas.add(bal);
        document.getElementById("dGuardadoError").innerHTML = "";
        crearBloque(bal);
        localStorage.setItem("balizasGuardadas", JSON.stringify([
            ...asBalizas
        ]));
    } else {
        document.getElementById("dGuardadoError").innerHTML = "";
        asBalizas = new Set();
        console.log('x: ', JSON.parse(valGuardados));
        getsVal = JSON.parse(valGuardados);
        getsVal.forEach((a)=>{
            asBalizas.add(a);
        });
        if (!asBalizas.has(bal)) {
            asBalizas.add(bal);
            crearBloque(bal);
        }
        localStorage.setItem("balizasGuardadas", JSON.stringify([
            ...asBalizas
        ]));
    }
}
function crearBloque(a) {
    document.getElementById("dBalizasGuar").innerHTML += `<div class="col-sm-3 balizasGuardada">
        <h7>${a}</h7>
        <div class="dBloqueDatos">
            <div class="dEstado">
                <i id="iEstadoTiempo"></i>
            </div>
            <div class="dDatoParam" id="dDatoParam1">
                <i class="bi bi-thermometer iconoPanel" value="Temperatura"><span id="spParam1">20&deg;C</span></i>
            </div>
            <div class="dDatoParam" id="dDatoParam2">
                <i class="bi bi-moisture iconoPanel" value="Humedad"><span id="spParam1">68%</span></i>
            </div>  
            <div class="dDatoParam dDatoParam3 dDropable">
                
            </div>            
        </div>    
    </div>`;
    crearBloqueDraggable();
}
function verBaliza() {
    let sBaliza = this.value;
    cambioVerBaliza();
    document.getElementById("hCabBaliza").textContent = sBaliza;
}

//# sourceMappingURL=index.6d8fae21.js.map
