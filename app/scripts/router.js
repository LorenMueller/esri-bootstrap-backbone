define(["dojo/_base/declare", "myApp/views/views"],
    function (declare, Views) {
    	WUIDemoApp.views = Views;
		var Router = Backbone.Router.extend({
			routes : {
				"splash": "splash",
				"map" : "map",
				"about" : "about",
				"*notFound": "notFound"
			},
			notFound: function(){
				try{
					WUIDemoApp.router.navigate("splash",{trigger:true});
				}catch(err){
					console.error('Router error, notFound: ', err.message);
				}
			},
			splash: function(){
				try{
					var sv;
					Views.destroyAll();
					if(WUIDemoApp.views.getView('splash')){
						//already have this view, show it
						Views.showView('splash');
					}else{
						//no view, make it.
						sv = Views.makeView('splash')
						Views.showView('splash');
					};
				}catch(err){
					console.error('Router error, splash: ', err.message);
				}
			},
			map: function(){
				try{
					var mv;
					Views.hideAll();
					//show/create view
					if(WUIDemoApp.views.getView('map')){
						//already have this view, show it
						Views.showView('map');
						//re-initialize the map
						WUIDemoApp.mapping.mapState.height = $('#mapContent').height();
	              		WUIDemoApp.mapping.mapState.width = $('#mapContent').width();
						WUIDemoApp.mapping.reInitMap();
					}else{
						//no view, make it.
						mv = Views.makeView('map')
						Views.showView('map');
						//initialize the map
						WUIDemoApp.mapping.init();
					};
				}catch(err){
					console.error('Router error, map: ', err.message);
				}
			},
			about : function() {
				try{
					var av;
					if(!WUIDemoApp.views.getView('map')){
						//if routing to the this view from a saved link for example, re-init app by routing to splash
						WUIDemoApp.router.navigate("splash",{trigger:true});
						return;
					};
					WUIDemoApp.mapping.recordMapState();
					WUIDemoApp.mapping.destroyMap();
					Views.hideAll();
					//show/create view
					if(WUIDemoApp.views.getView('about')){
						//already have this view, show it
						Views.showView('about');
					}else{
						//no view, make it.
						av = Views.makeView('about')
						Views.showView('about');
					};
				}catch(err){
					console.error('Router error, about: ', err.message);
				}
			}
		});
		return Router;
    }
);