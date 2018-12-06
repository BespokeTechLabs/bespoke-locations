mapboxgl.accessToken = 'pk.eyJ1IjoibGV3aXNzbWFsbHdvb2QiLCJhIjoiY2pwY3hiNmc1MzF2eDN3cGhjbXA0M2g3ZSJ9.GoUGg6UcUV-fvYV2IXVoOw';

// Define a map centered on Europe.
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/lewissmallwood/cjpcysjeo4dcn2rqrqkl7268i',
    center: [-4.141137, 50.374992],
    zoom: 6
});

var geojson = {
    "type": "FeatureCollection",
    "features": [{
         "type": "Feature",
         "geometry": {
             "type": "Point",
             "coordinates": [-4.141137, 50.374992]
         },
         "properties": {
             "title": "Our HQ - Plymouth Office",
             "description": "2nd Floor Marine Building, University of Plymouth, Drake Circus, Plymouth, PL4 8AA"
         }
     },
     {
         "type": "Feature",
         "geometry": {
         "type": "Point",
         "coordinates": [-2.852255, 51.435501]
        },
         "properties": {
             "title": "Clevedon Workspace",
             "description": "We also operate from Clevedon (near Bristol)"
         }
     }]
};

// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
});

