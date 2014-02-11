define([
    'myApp/views/vMap',
    'myApp/views/vAbout',
    'myApp/views/vSplash'
    ],
    function (
        ViewMap,
        ViewAbout,
        ViewSplash
        )
    {
    var views = {};
    views.makeView = function (vName, colDat) {
        switch (vName) {
            case 'map':
                views.viewMap = new ViewMap();
                return views.viewMap;
                break;
            case 'about':
                views.viewAbout = new ViewAbout();
                return views.viewAbout;
                break;
            case 'splash':
                views.viewSplash = new ViewSplash();
                return views.viewSplash;
                break;
        }
    };
    views.getView = function (vName) {
        switch (vName) {
            case 'map':
                if(views.viewMap && !_.isEmpty(views.viewMap)){
                    return views.viewMap;    
                }else{
                    return undefined;
                }
                break;
            case 'about':
                if(views.viewAbout && !_.isEmpty(views.viewAbout)){
                    return views.viewAbout;    
                }else{
                    return undefined;
                }
                break;
            case 'splash':
                if(views.viewSplash && !_.isEmpty(views.viewSplash)){
                    return views.viewSplash;    
                }else{
                    return undefined;
                }
                break;
        }
    };
    views.showView = function(vName){
        switch (vName) {
            case 'map':
                if(views.viewMap && !_.isEmpty(views.viewMap)) views.viewMap.$el.show();
                break;
            case 'about':
                if(views.viewAbout && !_.isEmpty(views.viewAbout)) views.viewAbout.$el.show();
                break;
            case 'splash':
                if(views.viewSplash && !_.isEmpty(views.viewSplash)) views.viewSplash.$el.show();
                break;
        }
    };
    views.hideAll = function(){
    	if(views.viewMap && !_.isEmpty(views.viewMap)) views.viewMap.$el.hide();
    	if(views.viewAbout && !_.isEmpty(views.viewAbout)) views.viewAbout.$el.hide();
        if(views.viewSplash && !_.isEmpty(views.viewSplash)) views.viewSplash.$el.hide();
    };
    views.destroyView = function(vName){
        switch (vName) {
            case 'map':
                if(views.viewMap && !_.isEmpty(views.viewMap)){
                    views.viewMap.close ? views.viewMap.close() : views.viewMap.remove();
                    views.viewMap = {};
                };
                break;
            case 'about':
                if(views.viewAbout  && !_.isEmpty(views.viewAbout)) {
                    views.viewAbout.close ? views.viewAbout.close() : views.viewAbout.remove();
                    views.viewAbout = {};
                };
                break;
            case 'splash':
                if(views.viewSplash && !_.isEmpty(views.viewSplash)) {
                    views.viewSplash.close ? views.viewSplash.close() : views.viewSplash.remove();  
                    views.viewSplash = {};
                };
                break;
        }
    };    
    views.destroyAll = function(){
        if(views.viewMap && !_.isEmpty(views.viewMap)){
            views.viewMap.close ? views.viewMap.close() : views.viewMap.remove();
            views.viewMap = {};
        };
        if(views.viewAbout  && !_.isEmpty(views.viewAbout)) {
            views.viewAbout.close ? views.viewAbout.close() : views.viewAbout.remove();
            views.viewAbout = {};
        };
        if(views.viewSplash && !_.isEmpty(views.viewSplash)) {
            views.viewSplash.close ? views.viewSplash.close() : views.viewSplash.remove();  
            views.viewSplash = {};
        };
    };
    return views;
});