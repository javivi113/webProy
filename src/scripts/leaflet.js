import L from 'leaflet';
const map = L.map('map').setView([43.0119500, -2.56789], 8.5);
var url = "https://localhost:5001";
const oMarker = JSON.parse(aMarkers);
let bPrim = false;
var selectIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var unSelectIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function colocarMarcadores() {
    var ApiDatos = fetch(`${url}/api/Tiempo`)
        .then(response => {
            return response.json();
        })
        .then(api => {
            //console.log(api)
            var getsVal=[""];
            var stMunipaNoRep = new Set();
            let valGuardados = localStorage.getItem("balizasGuardadas");
            if (valGuardados != undefined) {
                getsVal = JSON.parse(valGuardados);
            }
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            oMarker.forEach(b => {
                api.forEach(munici => {
                    let puebloJson = b.Municipio;
                    let puebloJMinus = puebloJson.toString().toLowerCase();
                    let puebloApi = munici.municipio;
                    let puebloAMinus = puebloApi.toString().toLowerCase();
                    if (puebloJMinus.includes(puebloAMinus)) {
                        //console.log(`${puebloAMinus}=>${puebloJMinus}`)
                        if (!stMunipaNoRep.has(puebloAMinus)) {
                            stMunipaNoRep.add(puebloAMinus);
                            //console.log(getsVal+"=>"+b.Municipio)   
                            if (getsVal.includes(b.Municipio)) {
                                let marcador = L.marker([b.GpxY, b.GpxX], { icon: selectIcon })
                                    .bindPopup(b.Municipio)
                                    .addTo(map)
                                    .on("click", k => {
                                        if (!bPrim) {
                                            $("#dOpciones").slideDown(100);
                                            bPrim = !bPrim;
                                        } else {
                                            $("#dOpciones").slideToggle(50);
                                            $("#dOpciones").slideToggle(100);
                                        }
                                        $("#dOpciones").html(`<div id="dBalSele"><p id="pDBaliza">${b.Municipio}</p></div>
            <button id="btnAñadirBaliza" class='btnOpciones' value='${b.Municipio}'>Eliminar</button>
            <button id="btnVerBaliza" class='btnOpciones' value='${b.Municipio}'>Ver</button>`);
                                        $("#btnAñadirBaliza").on("click", addBaliza);
                                        $("#btnVerBaliza").on("click", verBaliza);

                                    })
                            } else {
                                var marcador = L.marker([b.GpxY, b.GpxX], { icon: unSelectIcon })
                                    .bindPopup(b.Municipio)
                                    .addTo(map)
                                    .on("click", k => {
                                        if (!bPrim) {
                                            $("#dOpciones").slideDown(100);
                                            bPrim = !bPrim;
                                        } else {
                                            $("#dOpciones").slideToggle(50);
                                            $("#dOpciones").slideToggle(100);
                                        }
                                        $("#dOpciones").html(`<div id="dBalSele"><p id="pDBaliza">${b.Municipio}</p></div>
            <button id="btnAñadirBaliza" class='btnOpciones' value='${b.Municipio}'>Añadir</button>
            <button id="btnVerBaliza" class='btnOpciones' value='${b.Municipio}'>Ver</button>`);
                                        $("#btnAñadirBaliza").on("click", addBaliza);
                                        $("#btnVerBaliza").on("click", verBaliza);

                                    })
                            }
                        }
                    }
                })
            });
        })
        .catch(err => console.log(err));
}
colocarMarcadores();
window.colocarMarcadores = colocarMarcadores;
