var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Adminkecsekabupaten_1 = new ol.format.GeoJSON();
var features_Adminkecsekabupaten_1 = format_Adminkecsekabupaten_1.readFeatures(json_Adminkecsekabupaten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adminkecsekabupaten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adminkecsekabupaten_1.addFeatures(features_Adminkecsekabupaten_1);
var lyr_Adminkecsekabupaten_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adminkecsekabupaten_1, 
                style: style_Adminkecsekabupaten_1,
                interactive: true,
                title: '<img src="styles/legend/Adminkecsekabupaten_1.png" /> Admin kec se kabupaten'
            });
var format_persebarancovid_2 = new ol.format.GeoJSON();
var features_persebarancovid_2 = format_persebarancovid_2.readFeatures(json_persebarancovid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_persebarancovid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_persebarancovid_2.addFeatures(features_persebarancovid_2);
var lyr_persebarancovid_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_persebarancovid_2, 
                style: style_persebarancovid_2,
                interactive: true,
                title: '<img src="styles/legend/persebarancovid_2.png" /> persebaran covid'
            });
var format_puskesmasLapisantanpajudul_3 = new ol.format.GeoJSON();
var features_puskesmasLapisantanpajudul_3 = format_puskesmasLapisantanpajudul_3.readFeatures(json_puskesmasLapisantanpajudul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puskesmasLapisantanpajudul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puskesmasLapisantanpajudul_3.addFeatures(features_puskesmasLapisantanpajudul_3);
var lyr_puskesmasLapisantanpajudul_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puskesmasLapisantanpajudul_3, 
                style: style_puskesmasLapisantanpajudul_3,
                interactive: true,
                title: 'puskesmas — Lapisan tanpa judul'
            });
var format_rsbatangLapisantanpajudul_4 = new ol.format.GeoJSON();
var features_rsbatangLapisantanpajudul_4 = format_rsbatangLapisantanpajudul_4.readFeatures(json_rsbatangLapisantanpajudul_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rsbatangLapisantanpajudul_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rsbatangLapisantanpajudul_4.addFeatures(features_rsbatangLapisantanpajudul_4);
var lyr_rsbatangLapisantanpajudul_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rsbatangLapisantanpajudul_4, 
                style: style_rsbatangLapisantanpajudul_4,
                interactive: true,
                title: 'rs batang — Lapisan tanpa judul'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Adminkecsekabupaten_1.setVisible(true);lyr_persebarancovid_2.setVisible(true);lyr_puskesmasLapisantanpajudul_3.setVisible(true);lyr_rsbatangLapisantanpajudul_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Adminkecsekabupaten_1,lyr_persebarancovid_2,lyr_puskesmasLapisantanpajudul_3,lyr_rsbatangLapisantanpajudul_4];
lyr_Adminkecsekabupaten_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ADMINKEC_': 'ADMINKEC_', 'ADMINKEC_I': 'ADMINKEC_I', 'KD_KC': 'KD_KC', 'KD_KAB': 'KD_KAB', 'KD_PROV': 'KD_PROV', 'KAB': 'KAB', 'PROV': 'PROV', 'KEC': 'KEC', 'EKSKARIS': 'EKSKARIS', 'luas': 'luas', 'Hirarki': 'Hirarki', 'klasifikas': 'klasifikas', 'klas': 'klas', 'PUSAT_KEGI': 'PUSAT_KEGI', 'dob': 'dob', 'dob_1': 'dob_1', });
lyr_persebarancovid_2.set('fieldAliases', {'ID': 'ID', 'KECAMATAN': 'KECAMATAN', 'Terkonfirm': 'Terkonfirm', 'Isolasi_Ma': 'Isolasi_Ma', 'Dirawat_RS': 'Dirawat_RS', 'Sembuh': 'Sembuh', 'Meninggal': 'Meninggal', });
lyr_puskesmasLapisantanpajudul_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_rsbatangLapisantanpajudul_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Adminkecsekabupaten_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ADMINKEC_': 'TextEdit', 'ADMINKEC_I': 'TextEdit', 'KD_KC': 'Range', 'KD_KAB': 'Range', 'KD_PROV': 'Range', 'KAB': 'TextEdit', 'PROV': 'TextEdit', 'KEC': 'TextEdit', 'EKSKARIS': 'TextEdit', 'luas': 'TextEdit', 'Hirarki': 'TextEdit', 'klasifikas': 'TextEdit', 'klas': 'TextEdit', 'PUSAT_KEGI': 'TextEdit', 'dob': 'TextEdit', 'dob_1': 'TextEdit', });
lyr_persebarancovid_2.set('fieldImages', {'ID': '', 'KECAMATAN': '', 'Terkonfirm': '', 'Isolasi_Ma': '', 'Dirawat_RS': '', 'Sembuh': '', 'Meninggal': '', });
lyr_puskesmasLapisantanpajudul_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_rsbatangLapisantanpajudul_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Adminkecsekabupaten_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'ADMINKEC_': 'no label', 'ADMINKEC_I': 'no label', 'KD_KC': 'no label', 'KD_KAB': 'no label', 'KD_PROV': 'no label', 'KAB': 'no label', 'PROV': 'no label', 'KEC': 'no label', 'EKSKARIS': 'no label', 'luas': 'no label', 'Hirarki': 'no label', 'klasifikas': 'no label', 'klas': 'no label', 'PUSAT_KEGI': 'no label', 'dob': 'no label', 'dob_1': 'no label', });
lyr_persebarancovid_2.set('fieldLabels', {'ID': 'no label', 'KECAMATAN': 'no label', 'Terkonfirm': 'no label', 'Isolasi_Ma': 'no label', 'Dirawat_RS': 'no label', 'Sembuh': 'no label', 'Meninggal': 'no label', });
lyr_puskesmasLapisantanpajudul_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_rsbatangLapisantanpajudul_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_rsbatangLapisantanpajudul_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});