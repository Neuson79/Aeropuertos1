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

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_ne_10m_airports_2 = new ol.format.GeoJSON();
var features_ne_10m_airports_2 = format_ne_10m_airports_2.readFeatures(json_ne_10m_airports_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_2.addFeatures(features_ne_10m_airports_2);cluster_ne_10m_airports_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ne_10m_airports_2
});
var lyr_ne_10m_airports_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ne_10m_airports_2, 
                style: style_ne_10m_airports_2,
                interactive: true,
                title: '<img src="styles/legend/ne_10m_airports_2.png" /> ne_10m_airports'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_ne_10m_airports_2.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_GoogleTerrain_1,lyr_ne_10m_airports_2];
lyr_ne_10m_airports_2.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'Clases': 'Clases', });
lyr_ne_10m_airports_2.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'TextEdit', 'gps_code': 'TextEdit', 'iata_code': 'Hidden', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'Clases': 'TextEdit', });
lyr_ne_10m_airports_2.set('fieldLabels', {'scalerank': 'no label', 'name': 'no label', 'location': 'no label', 'gps_code': 'no label', 'wikipedia': 'no label', 'Clases': 'no label', });
lyr_ne_10m_airports_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});