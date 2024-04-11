let lat = 47.776389
let lng = 13.433611
let zoom = 13

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale({
    imperial: false
}).addTo(map);




L.geoJSON(jsondata, {}).bindPopup(function (layer) {
    console.log(layer.feature.properties)
    return `
    <h2>${layer.feature.properties.name}</h2>
    <ul>
    <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(5)} </li>
    <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(5)} </li>
    <li><a href="https://${layer.feature.properties.user}.github.io/top">Etappenseite>/
    a></li>
    <li><a href="${layer.feature.properties.wikipedia}">Wikipediaseite</li>

    </ul>
    `;
}).addTo(map);


