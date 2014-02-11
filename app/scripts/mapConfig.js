define([],
    function () {
        var config = {};
        config.mapDivId = 'mapContent';
        config.centerLon = -98.5795; //Lon for center of US to init map
        config.centerLat = 39.8282; //Lat for center of US to init map
        config.initZoomLevel = 4;
        config.centerSpatialRefWKId = 4326; //wgs84
        config.initBaseMap = "topo";
        config.clickLocationGraphicsLayerMapId = 'clGraphics';
        return config;
    }
);