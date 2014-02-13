define(["dojo/_base/declare", "myApp/views/views"],
    function (declare, Views) {
    	yourCoolApp.views = Views;
		var Router = Backbone.Router.extend({
			routes : {
				"splash": "splash",
				"map" : "map",
				"about" : "about",
				"*notFound": "notFound"
			},
			notFound: function(){
				try{
					yourCoolApp.router.navigate("splash",{trigger:true});
				}catch(err){
					console.error('Router error, notFound: ', err.message);
				}
			},
			splash: function(){
				try{
					var sv;
					Views.destroyAll();
					if(yourCoolApp.views.getView('splash')){
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
					if(yourCoolApp.views.getView('map')){
						//already have this view, show it
						Views.showView('map');
						//re-initialize the map
						yourCoolApp.mapping.mapState.height = $('#mapContent').height();
	              		yourCoolApp.mapping.mapState.width = $('#mapContent').width();
						yourCoolApp.mapping.reInitMap();
					}else{
						//no view, make it.
						mv = Views.makeView('map')
						Views.showView('map');
						//initialize the map
						yourCoolApp.mapping.init();
					};
				}catch(err){
					console.error('Router error, map: ', err.message);
				}
			},
			about : function() {
				try{
					var av;
					if(!yourCoolApp.views.getView('map')){
						//if routing to the this view from a saved link for example, re-init app by routing to splash
						yourCoolApp.router.navigate("splash",{trigger:true});
						return;
					};
					yourCoolApp.mapping.recordMapState();
					yourCoolApp.mapping.destroyMap();
					Views.hideAll();
					//show/create view
					if(yourCoolApp.views.getView('about')){
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