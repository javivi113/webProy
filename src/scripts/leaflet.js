import L from 'leaflet';
const oMarker = JSON.parse(aMarkers);
let bPrim=false;
var map = L.map('map').setView([43.0119500, -2.56789], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
oMarker.forEach(b => {
    var marcador = L.marker([b.GpxY, b.GpxX])
        .bindPopup(b.Nombre)
        .addTo(map)
        .on("click",b=>{
            if (!bPrim) {
                $("#dOpciones").slideDown(100);
                bPrim=!bPrim;
            }else{
                $("#dOpciones").slideToggle(50);
                $("#dOpciones").slideToggle(100);
            }

            
        })
});