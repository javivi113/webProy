var aTiposDatos = `[{"Tipo": "Temperatura","Medida": "&deg;C"},{"Tipo": "Humedad","Medida": "%"},{"Tipo": "Velocidad_del_viento","Medida": "km/h"},{"Tipo": "Precipitacion","Medida": "mm"}]`;
const oTiposDatos = JSON.parse(aTiposDatos);
jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtZXQwMS5hcGlrZXkiLCJpc3MiOiJJRVMgUExBSUFVTkRJIEJISSBJUlVOIiwiZXhwIjoyMjM4MTMxMDAyLCJ2ZXJzaW9uIjoiMS4wLjAiLCJpYXQiOjE2NDE5NzM3OTksImVtYWlsIjoiaWtiZWNAcGxhaWF1bmRpLm5ldCJ9.YPuReD7iqyLlg0zu7DimIWYHlENKM1JwjfF8wYRygLyNnEvnGrUOD-65607nHjlpCYH1zMc-xjLqcTn4oaOXaZy6cIP005CMLxDLXLZNS1brmHihJdAQ2-fMSjBSb1dD0zcb8arYn-lLzVb1GkRWaa6LT4t4GeaTokwTwel_8BtBPOVLOJx8WqILXSJk-Fy53H-BES_ygoqzWu4hOiasRgDKN-IiZvyBReixwXSq92fljibuXYqRFyrXX23yQxBqwiqbzI0DuQvmMKJUKIwYAwu_vrpWkRRNWHLCVlZ-P4qYScEwO0wVYCHXBGPbcG23GQyo2oD9_5kdP3LwEu9pTg';
$.ajax({
    type: "GET",
    dataType: "html",
    url: 'https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/great_bilbao/locations/bilbao/forecast/at/2020/11/27/for/20201127',
    headers: {
        "accept": "application/json",
        "Authorization": "Bearer " + jwt
    }

}).done(function (response) {
    console.log("response: " + response);
    aDatos = JSON.parse(response);
    console.log(JSON.parse(response));
    Estaciones = new Set()
    aDatos.forEach(item => { Estaciones.add(item.stationId) });
    sEstaciones = "";
    aEstaciones = [];
    i = 0;
    Estaciones.forEach((item) => { aEstaciones[i++] = { id: item } })
    //en aEstaciones tenemos un JSON con los IDs de las estaciones
}).fail(function (err) {
    console.log("error");
    console.log(err);
});