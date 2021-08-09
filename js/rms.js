var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}), dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
});

var map = L.map(
    "rms", { 
    center: [52.1292125,5.4497806], 
    zoom: 7,
    layers: [osm],
});

var baseMaps = {
    "Openstreet": osm,
    "Dark mode": dark
}

var wmsLayer = L.tileLayer.wms('https://geodata.nationaalgeoregister.nl/rws/kaderrichtlijnwateractueel/wms/v1_0?service=WMS&request=GetCapabilities', {
    layers: 'krw_oppervlaktewaterlichamen_rws_act_v',
    opacity: 0.5,
});


var overLay = {
    "Data": wmsLayer
}

map.scrollWheelZoom.disable();

L.control.layers(baseMaps, overLay).addTo(map);