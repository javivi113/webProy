let getsVal;
function delBaliza(loc) {
    let valGuardados = JSON.parse(localStorage.getItem("balizasGuardadas"));
    let asBalizas = new Set();
    valGuardados.forEach(a => asBalizas.add(a));
    asBalizas.delete(loc);
    localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    cambioInicial();
}
window.delBaliza = delBaliza;
function addBaliza() {
    let asBalizas = new Set();
    let bal = this.value;
    cambioSit();
    let valGuardados = localStorage.getItem("balizasGuardadas");
    if (valGuardados == undefined) {
        asBalizas.add(bal);
        document.getElementById("dGuardadoError").innerHTML = "";
        fetch(`${url}/api/Tiempo/${bal}`)
            .then(response => response.json())
            .then(b => {
                crearBloque(b.municipio, b.temperatura, b.descripcionTiempo, b.pathImg, b.velocidadViento, b.precipitaciones);
            })
            .catch(err => console.log(err));
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    } else {
        document.getElementById("dGuardadoError").innerHTML = "";
        asBalizas = new Set();
        getsVal = JSON.parse(valGuardados);
        getsVal.forEach(a => {
            asBalizas.add(a);
        })
        if (!asBalizas.has(bal)) {
            if (asBalizas.size < 3) {
                asBalizas.add(bal);
                fetch(`${url}/api/Tiempo/${bal}`)
                    .then(response => response.json())
                    .then(b => {
                        crearBloque(b.municipio, b.temperatura, b.descripcionTiempo, b.pathImg, b.velocidadViento, b.precipitaciones);
                    })
                    .catch(err => console.log(err));
            } else {
                alert("No puedes añadir mas de 3 balizas.");
            }

        }
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    }
}
function crearBloque(a, temp, descTiempo, imgTiempo, velViento, precipitaciones) {
    var fecha = new Date;
    document.getElementById("dBalizasGuar").innerHTML +=
        `<div class="col-sm-3 balizasGuardada dropAqui" value="${a}">
        <h6 class="hLocalidadGuardada">${a}</h6>
        <div class="dBloqueDatos">
            <div class="dEstado" id="dDatEstado${a}">
                <!--<p>${fecha.getHours()}:${fecha.getMinutes()}</p>-->
                <p>${descTiempo}</p>
            </div>
            <div class="dDatoParam" id="dDatTiempo${a}">
                <i class="bi bi-x-circle btnExit"></i>  
                <i class="bi bi-cloud-sun iconoPanel"><img src="https://opendata.euskadi.eus/${imgTiempo}" class="iEstadoTiempo"></img></i>
            </div> 
            <div class="dDatoParam" id="dDatTemperatura${a}">
                <i class="bi bi-x-circle btnExit"></i> 
                <i class="bi bi-thermometer iconoPanel"><span id="spParam1">${temp}&deg;C</span></i>
            </div>
            <div class="dDatoParam" id="dDatPrecipitaciones${a}">
                <i class="bi bi-x-circle btnExit"></i> 
                <i class="bi bi-moisture iconoPanel"><span id="spParam2">${precipitaciones} ml/h</span></i>
            </div>  
            <div class="dDatoParam" id="dDatVelViento${a}">
                <i class="bi bi-x-circle btnExit"></i> 
                <i class="bi bi-wind iconoPanel"><span id="spParam3">${velViento} km/h</span></i>
            </div>
                       
        </div>    
    </div>`;
    crearBloqueDraggable();
    cierraBotones();
    paramDrop();
}
function editarBloque(a, temp, descTiempo, imgTiempo, velViento, precipitaciones) {
    document.getElementById(`dDatTiempo${a}`).innerHTML = `
    <i class="bi bi-x-circle btnExit"></i>  
    <i class="bi bi-cloud-sun iconoPanel"><img src="https://opendata.euskadi.eus/${imgTiempo}" class="iEstadoTiempo"></img></i>`;

    document.getElementById(`dDatTemperatura${a}`).innerHTML=`<i class="bi bi-x-circle btnExit"></i> 
    <i class="bi bi-thermometer iconoPanel"><span id="spParam1">${temp}&deg;C</span></i>`;

    document.getElementById(`dDatPrecipitaciones${a}`).innerHTML=`<i class="bi bi-x-circle btnExit"></i> 
    <i class="bi bi-moisture iconoPanel"><span id="spParam2">${precipitaciones} ml/h</span></i>`;

    document.getElementById(`dDatVelViento${a}`).innerHTML=`<i class="bi bi-x-circle btnExit"></i> 
    <i class="bi bi-wind iconoPanel"><span id="spParam3">${velViento} km/h</span></i>`;

    document.getElementById(`dDatEstado${a}`).innerHTML=`<p>${descTiempo}</p>`;
}
function cierraBotones() {
    $(".btnExit").on("click", e => {
        e.target.parentElement.style.display = "none";
    })
}
function verBaliza() {
    let sBaliza = this.value;
    cambioVerBaliza();
    document.getElementById("hCabBaliza").textContent = sBaliza;
}