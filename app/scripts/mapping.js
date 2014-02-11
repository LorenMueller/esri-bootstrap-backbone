define([
  'dojo/_base/declare',
  'dojo/on',
  'dojo/_base/lang',
  'dojo/_base/Color',
  'esri/map', 
  'esri/graphic',
  'esri/layers/GraphicsLayer',
  'esri/renderers/SimpleRenderer',
  'esri/symbols/SimpleMarkerSymbol',
  'esri/symbols/SimpleLineSymbol',
  'myApp/mapConfig',
  'myApp/utilities'
  ],
    function (declare, on, lang, Color, Map, Graphic, GraphicsLayer, SimpleRenderer, SimpleMarkerSymbol, SimpleLineSymbol, mapConfig, Utilities) {
      return declare(null, {
        map:null,
        clickLocationGraphicsLayer:null,
        clickLocationSymbol:null,
        mapConfig: mapConfig,
        mapState: {},
        constructor: function(){
        },
        destroyMap: function(){
          this.map.destroy();
          this.map = {};
        },
        addClickLocationGraphic: function (mapPoint) {
          try{
            var mcgl,newGraphic;
            mcgl = this.map.getLayer(this.mapConfig.clickLocationGraphicsLayerMapId);
            mcgl.clear();
            newGraphic = new Graphic(mapPoint,null,null,null)
            mcgl.add(newGraphic);
            Utilities.HideIdWorking();
          }catch(err){
            Utilities.HideIdWorking();
            console.error("Error in mapping.addClickLocationGraphic(): ", err.message);
          }
        },
        recordMapState: function(){
          try{
            if(this.map){
              this.mapState.extent = this.map.extent; //web merc
              this.mapState.geoExtent = this.map.geographicExtent; //lat long
              this.mapState.height = $('#mapContent').height();
              this.mapState.width = $('#mapContent').width();
              this.mapState.spRef = this.map.spatialReference;
              this.mapState.zoomLevel = this.map.getLevel();
              this.mapState.basemapId = mapConfig.initBaseMap;
            }
          }catch(err){
            console.error('recordMapState() error: ', err.message);
          };
        },       
        initMapEvents:function(){
            on(this.map,"update-start", function () {
              Utilities.ShowMapLoading();
            });
            on(this.map, "update-end", function (err) {
              Utilities.HideMapLoading();
            });  
            on(this.map, "layer-add-result", lang.hitch(this, function (evtArgs) {
              if(evtArgs.hasOwnProperty('error')){
                alert(evtArgs.error.message);
              }
            }));
            on(this.map,"click", lang.hitch(this, function(evtArgs){
              Utilities.ShowIdWorking();
              this.mapState.clickPoint = evtArgs.mapPoint;
              this.addClickLocationGraphic(evtArgs.mapPoint);
            }));          
        },
        initGraphicLayers:function(){
          this.clickLocationGraphicsLayer = null;
          this.clickLocationSymbol = null;

          this.clickLocationGraphicsLayer = new GraphicsLayer({
              id: this.mapConfig.clickLocationGraphicsLayerMapId
          });
          this.clickLocationSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 20, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255,0,0]), 1), new Color([0,255,0,0.25]));
          this.clickLocationGraphicsLayer.setRenderer(new SimpleRenderer(this.clickLocationSymbol));
          this.map.addLayer(this.clickLocationGraphicsLayer);
        },
        reInitMap:function(){
          this.destroyMap;
          try{
            this.map = new Map(mapConfig.mapDivId, {
              extent: this.mapState.extent,
              zoom: this.mapState.zoomLevel,
              basemap: this.mapState.basemapId,
              autoResize: true,
              logo: false
            });
            this.initMapEvents();
            this.initGraphicLayers();
            if (this.mapState.clickPoint && this.mapState.clickPoint != null){
              this.addClickLocationGraphic(this.mapState.clickPoint);
            };
          }catch(err){
            console.error('reInitMap() error: ', err.message);
          };         
        },          
        init: function(){
          try{
            this.map = new Map(mapConfig.mapDivId, {
              center: [mapConfig.centerLon, mapConfig.centerLat],
              zoom: mapConfig.initZoomLevel,
              basemap: mapConfig.initBaseMap,
              autoResize: true,
              logo: false
            });
            this.initMapEvents();
            this.initGraphicLayers();
          }catch(err){
            console.error("Error initializing map: ", err.message);
          }
        }

      });
    }
);