ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-171.158667, -47.681802, 14.865148, 33.167777]);
var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);
var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_1_0.png" /> majorAirpo<br />\
    <img src="styles/legend/ne_10m_airports_1_1.png" /> midAirport<br />\
    <img src="styles/legend/ne_10m_airports_1_2.png" /> smallAirpo<br />'
        });

lyr_ESRIGraydark_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'Clase 1': 'Clase 1', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'TextEdit', 'gps_code': 'Hidden', 'iata_code': 'Hidden', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'Clase 1': 'TextEdit', });
lyr_ne_10m_airports_1.set('fieldLabels', {'scalerank': 'no label', 'name': 'no label', 'location': 'no label', 'wikipedia': 'no label', 'Clase 1': 'no label', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});