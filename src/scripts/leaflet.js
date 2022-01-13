import L from 'leaflet';
const oMarker = JSON.parse(aMarkers);
let bPrim = false;
var bIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
var map = L.map('map').setView([43.0119500, -2.56789], 8.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
oMarker.forEach(b => {
    var marcador = L.marker([b.GpxY, b.GpxX], {icon: bIcon})
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