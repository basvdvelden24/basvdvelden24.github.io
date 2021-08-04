var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}), dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

var map = L.map(
    "ganges", { //<-- nieuw id geven
    center: [24.2899775, 90.2571644], //coordinaten aanpassen
    zoom: 7,
    layers: [osm]
});

var baseMaps = {
    "Openstreet": osm,
    "Dark mode": dark
}

// alles namen veranderen gangesDelta deltaGanges
var gangesDelta = L.geoJson(deltaGanges, {
    style: function (feature) {
        return {
            color: '#43429c',
            weight: 1,
            fillOpacity: 1,
        }
    }
}).addTo(map);

var overLay = {
    "Data": gangesDelta
}

map.scrollWheelZoom.disable();

L.control.layers(baseMaps, overLay).addTo(map);