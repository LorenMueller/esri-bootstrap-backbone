esri-bootstrap-backbone
=======================

Simple ESRI js api/Dojo in a bootstrap grid with backbone views.
Uses Dojo AMD loading for custom app modules.

This is a light weight app combining the ESRI JS API (bundled with Dojo, loaded from CDN, see below for more discussion on this), Bootstrap, jQuery, Backbone, Underscore and Font Awesome. Grunt is used for task management. There are some artifacts in the project from the Yeoman Generators that I used as best practice examples. Some of these I decided to leave in such as Mocha testing and CoffeeScript, even though I did not use them here.

If you are more versed in Grunt tasks and patterns than I am you may notice some differences here from the typical.  For instance I had to remove the 'rev' task. As much as I like it I need the dojo loader to find the custom app files in the dist folder as the are named in dev. So the Uglify task is creating files with the same name, and not concatenating. The loss is cache-busting awesomeness that you get from 'rev' naming.

There do appear to be work-arounds to the esri/dojo bundle issue. Performing custom dojo builds with individual esri modules, if you want to get into that, might be the best way. See here for some ideas: http://gis.utah.gov/the-esri-api-for-javascriptdojo-build-system-saga-continues/ .Check out some of Scott's earlier posts for a bit of history on this.

The Backbone views could be handled differently but this appears to work pretty well.  There is an issue with the ESRI map control. When navigating back to the Map view after visiting the About view, the map does not redraw. My work around was to save as much of the map state as I needed to recreate it.

Hope you find this helpful. Would love to hear comments.