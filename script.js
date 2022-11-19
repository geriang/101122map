// singapore = 1.29, 103.85
// cambridge = 52.205067,0.107760
// singaporeZoo = 1.403717, 103.793974
// singaporeDiscovery = 1.332690, 103.679042
// jurongBirdPark = 1.319025, 103.706668


let cambridge = [52.205067,0.107760];
let singapore = [ 1.3646,103.7889]; // #1 Singapore latlng
let singaporeZoo = [1.403717,103.793974];
let singaporeDiscovery = [1.332690,103.679042];
let jurongBirdPark = [1.319025,103.706668];


let map = L.map('map').setView(singapore, 3); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);



document.addEventListener('DOMContentLoaded' , async() =>{

    const earthquakePoints = await axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson")
    console.log(earthquakePoints)

    const earthquakeCoordinates = earthquakePoints.data.features;

    let markerClusterLayer = L.markerClusterGroup();

    for (let i = 0; i < earthquakeCoordinates.length; i++){
        const lon = earthquakeCoordinates[i].geometry.coordinates[0];
        const lat = earthquakeCoordinates[i].geometry.coordinates[1];
        let pos = [lat, lon];
        L.marker(pos).addTo(markerClusterLayer);
    
   
    }

    markerClusterLayer.addTo(map);
})


// for (let i = 0; i < coordinates.length; i++){
//     const lon = coordinates[i][0];
//     const lat = coordinates[i][1];
//     let pos = [lat, lon];
//     L.marker(pos).addTo(markerClusterLayer);