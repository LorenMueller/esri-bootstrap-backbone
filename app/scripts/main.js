window.WUIDemoApp = {
	router:{},
	views:{},
	mapping:{},
	init: function () {
		'use strict';
		try {
			require(["myApp/router","myApp/mapping"], function(Router, Mapping) { 
				WUIDemoApp.mapping = new Mapping();
				WUIDemoApp.router = new Router();
				Backbone.history.start();
				WUIDemoApp.router.navigate("splash",{trigger:true});
			});
		}catch(e){
			console.error("Error initializing application: ", e.message);
		}
	}
};
require(["dojo/domReady!"], function() { 
	WUIDemoApp.init();
});