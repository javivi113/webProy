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
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    } else {
        document.getElementById("dGuardadoError").innerHTML = "";
        asBalizas = new Set();
        console.log('x: ', JSON.parse(valGuardados));
        getsVal = JSON.parse(valGuardados);
        getsVal.forEach(a => {
            asBalizas.add(a);
        })
        if (!asBalizas.has(bal)) {
            asBalizas.add(bal);
            crearBloque(bal);
        }
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    }
}
function crearBloque(a, temp, descTiempo, imgTiempo, velViento, precipitaciones) {
    var fecha= new Date;
    document.getElementById("dBalizasGuar").innerHTML +=
    `<div class="col-sm-3 balizasGuardada">
        <h7>${a}</h7>
        <div class="dBloqueDatos">
            <div class="dEstado">
                <img src="https://opendata.euskadi.eus/${imgTiempo}" id="iEstadoTiempo"></i>
                <span>${descTiempo}</span>
            </div>
            <div class="dDatoParam" id="dDatHora">
                <i class="bi bi-wind iconoPanel" value="Hora"><span id="spParamHora">${fecha.getHours()}:${fecha.getMinutes()}"</span></i>
            </div> 
            <div class="dDatoParam" id="dDatTemperatura">
                <i class="bi bi-thermometer iconoPanel" value="Temperatura"><span id="spParam1">${temp}&deg;C</span></i>
            </div>
            <div class="dDatoParam" id="dDatPrecipitaciones">
                <i class="bi bi-moisture iconoPanel" value="Precipitaciones"><span id="spParam2">${precipitaciones}</span></i>
            </div>  
            <div class="dDatoParam" id="dDatVelViento">
                <i class="bi bi-wind iconoPanel" value="VelViento"><span id="spParam3">${velViento}</span></i>
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