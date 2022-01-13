const markerIcon = L.icon({
    iconUrl: 'files/assets/layout/map-marker.png',
    iconSize: [24, 41],
    iconAnchor: [12, 41]
});

const map = L.map('map', {
    scrollWheelZoom: false
}).setView([51.010958,11.024643], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/floriantepelmann/ckump41c903u017lizcyz4tcy/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    accessToken: 'pk.eyJ1IjoiZmxvcmlhbnRlcGVsbWFubiIsImEiOiJja3ljbmtjcWUwcjJrMnZuMGk4NWRvdmM3In0.AQJ0fklwBflMY6UO3ww9zA'
}).addTo(map);

let coords = [51.010958,11.024643];
let marker = L.marker(coords, {icon: markerIcon}).addTo(map);
marker.bindPopup('<strong>Hier findest du uns:</strong><br>An der Lache 26<br>99086 Erfurt');
