import L from 'leaflet';
const oMarker = JSON.parse(aMarkers);
let bPrim = false;
var map = L.map('map').setView([43.0119500, -2.56789], 8.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
oMarker.forEach(b => {
    var marcador = L.marker([b.GpxY, b.GpxX])
        .bindPopup(b.Nombre)
        .addTo(map)
        .on("click", k => {
            if (!bPrim) {
                $("#dOpciones").slideDown(100);
                bPrim = !bPrim;
            } else {
                $("#dOpciones").slideToggle(50);
                $("#dOpciones").slideToggle(100);
            }
            $("#dOpciones").html(`<div id="dBalSele"><p id="pDBaliza">${b.Nombre}</p></div>
            <button id="btnAñadirBaliza" class='btnOpciones' value='${b.Nombre}'>Añadir</button>
            <button id="btnVerBaliza" class='btnOpciones' value='${b.Nombre}'>Ver</button>`);
            $("#btnAñadirBaliza").on("click", addBaliza);
            $("#btnVerBaliza").on("click", verBaliza);
            
        })
});