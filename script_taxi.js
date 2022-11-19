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


let map = L.map('map').setView(singapore, 11); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);











// // Set view the center point: 11


// // setup the tile layers with demo access token and add to map


// // Hands on 2: add markers to map and bind popup
// const singaporeMarker = L.marker(singapore);
// singaporeMarker.addTo(map);
// singaporeMarker.bindPopup("<p>Singapore</p>")

// const singaporeZooMarker = L.marker(singaporeZoo);
// singaporeZooMarker.addTo(map);
// singaporeZooMarker.bindPopup("<p>Singapore Zoo</p>")

// const singaporeDiscoveryMarker = L.marker(singaporeDiscovery);
// singaporeDiscoveryMarker.addTo(map);
// singaporeDiscoveryMarker.bindPopup("<p>Singapore Discovery Center</p>");

// const jurongBirdParkMarker = L.marker(jurongBirdPark);
// jurongBirdParkMarker.addTo(map);
// jurongBirdParkMarker.bindPopup("<p>Jurong Bird Park</p>");

// // singaporeMarker.addEventListener('click', function(){
// //     alert("Singapore");
// // })

// let circle = L.circle([1.35166526, 103.773663572], {
//     color: 'red',
//     fillColor:"orange",
//     fillOpacity:0.5,
//     radius: 800
// })

// // add it to the map
// circle.addTo(map);





// function getRandomLatLng(map) {
//     // get the boundaries of the map
//     let bounds = map.getBounds();
//     let southWest = bounds.getSouthWest();
//     let northEast = bounds.getNorthEast();
//     let lngSpan = northEast.lng - southWest.lng;
//     let latSpan = northEast.lat - southWest.lat;

//     let randomLng = Math.random() * lngSpan + southWest.lng;
//     let randomLat = Math.random() * latSpan + southWest.lat;

//     return [ randomLat, randomLng,];
// }


// for (let i = 0; i < 5; i++){
//     const coordinate = getRandomLatLng(map);
//     const randomMarker = L.marker(coordinate); 
//     randomMarker.addTo(map);
// }

// create marker cluster
// let markerClusterLayer = L.markerClusterGroup();

// for (let i = 0; i < 1000; i++) {
//     let pos = getRandomLatLng(map);
//     L.marker(pos).addTo(markerClusterLayer);
// }

// markerClusterLayer.addTo(map);

// getRandomLatLng(map)




















// the map argument refers to the map which we create using Leaflet

// create the layer group

// add markers to the group


// add the group layer to the map

// add toggle button

document.addEventListener('DOMContentLoaded' , async() =>{

    const taxiPoints = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");

    console.log(taxiPoints)

    const coordinates = taxiPoints.data.features[0].geometry.coordinates;

    let markerClusterLayer = L.markerClusterGroup();

    for (let i = 0; i < coordinates.length; i++){
        const lon = coordinates[i][0];
        const lat = coordinates[i][1];
        let pos = [lat, lon];
        L.marker(pos).addTo(markerClusterLayer);
    
   
    }

    markerClusterLayer.addTo(map);

} );

// Bus Stop Solution ********************

document.addEventListener('DOMContentLoaded' , async() =>{

    const busPoints = await axios.get("https://gist.githubusercontent.com/kunxin-chor/b0a3e50161cd7a53d1bcdc5cc93b11fe/raw/05716c38af2b960d0f34d4db1fef6ce38d42455e/bus-stop.json");

    console.log(busPoints)

    const busCoordinates = busPoints.data;

    let markerClusterLayer = L.markerClusterGroup();

    for (let i in busCoordinates){
        const lon = busCoordinates[i][0];
        const lat = busCoordinates[i][1];
        let pos = [lat, lon];
        L.marker(pos).addTo(markerClusterLayer);
    
   
    }

    markerClusterLayer.addTo(map);
})

