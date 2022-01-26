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
        fetch(`${url}/api/Tiempo/${bal}`)
            .then(response => response.json())
            .then(b => {
                console.log("*********");
                console.log(b.municipio);
                console.log("*********");
                crearBloque(b.municipio, b.temperatura, b.descripcionTiempo, b.pathImg, b.velocidadViento, b.precipitaciones);
            })
            .catch(err => console.log(err));
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
            fetch(`${url}/api/Tiempo/${bal}`)
                .then(response => response.json())
                .then(b => {
                    console.log("*********");
                    console.log(b.municipio);
                    console.log("*********");
                    crearBloque(b.municipio, b.temperatura, b.descripcionTiempo, b.pathImg, b.velocidadViento, b.precipitaciones);
                })
                .catch(err => console.log(err));
        }
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    }
}
function crearBloque(a, temp, descTiempo, imgTiempo, velViento, precipitaciones) {
    var fecha = new Date;
    document.getElementById("dBalizasGuar").innerHTML +=
        `<div class="col-sm-3 balizasGuardada">
        <h6 class="hLocalidadGuardada">${a}</h6>
        <div class="dBloqueDatos">
            <div class="dEstado">
                <!--<p>${fecha.getHours()}:${fecha.getMinutes()}</p>-->
                <p>${descTiempo}</p>
            </div>
            <div class="dDatoParam" id="dDatHora">
                <i class="bi bi-x-circle btnExit"></i>  
                <i class="bi bi-cloud-sun iconoPanel" value="Hora"><img src="https://opendata.euskadi.eus/${imgTiempo}" class="iEstadoTiempo"></img></i>
            </div> 
            <div class="dDatoParam" id="dDatTemperatura">
                <i class="bi bi-x-circle btnExit"></i> 
                <i class="bi bi-thermometer iconoPanel" value="Temperatura"><span id="spParam1">${temp}&deg;C</span></i>
            </div>
            <div class="dDatoParam" id="dDatPrecipitaciones">
                <i class="bi bi-x-circle btnExit"></i> 
                <i class="bi bi-moisture iconoPanel" value="Precipitaciones"><span id="spParam2">${precipitaciones} ml/h</span></i>
            </div>  
            <div class="dDatoParam" id="dDatVelViento">
                <i class="bi bi-x-circle btnExit"></i> 
                <i class="bi bi-wind iconoPanel" value="VelViento"><span id="spParam3">${velViento} km/h</span></i>
            </div>
                       
        </div>    
    </div>`;
    crearBloqueDraggable();
    cierraBotones();
}
function cierraBotones() {
    $(".btnExit").on("click",e=>{
        e.target.parentElement.style.display="none";
    })
}
function verBaliza() {
    let sBaliza = this.value;
    cambioVerBaliza();
    document.getElementById("hCabBaliza").textContent = sBaliza;
}