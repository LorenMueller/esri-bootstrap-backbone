window.yourCoolApp = {
	router:{},
	views:{},
	mapping:{},
	init: function () {
		'use strict';
		try {
			require(["myApp/router","myApp/mapping"], function(Router, Mapping) { 
				yourCoolApp.mapping = new Mapping();
				yourCoolApp.router = new Router();
				Backbone.history.start();
				yourCoolApp.router.navigate("splash",{trigger:true});
			});
		}catch(e){
			console.error("Error initializing application: ", e.message);
		}
	}
};
require(["dojo/domReady!"], function() { 
	yourCoolApp.init();
});