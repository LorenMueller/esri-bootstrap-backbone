esri-bootstrap-backbone
=======================

Simple ESRI JS API app in a bootstrap grid with backbone views. Uses Dojo AMD loading for custom app modules.

1. Clone repo somewhere locally.
2. Install Node. Install Grunt and Bower.
3. Open command window and CD to that folder.
4. Run ‘npm install’ to get all of the grunt packages installed.
5. Run ‘bower install’ to get all of the vendor packages installed.
6. Run ‘grunt serve’.

This app combines the ESRI JS API (bundled with Dojo, loaded from CDN, see below for more discussion on this), Bootstrap, jQuery, Backbone, Underscore and Font Awesome. Grunt is used for task management. There are some artifacts in the project from the Yeoman Generators that I used as best practice examples. Some of these I decided to leave in such as Mocha testing and CoffeeScript, even though I did not use them here.

If you are more versed in Grunt tasks and patterns than I am you may notice some differences here from the typical.  For instance I had to remove the 'rev' task. As much as I like it I need the dojo loader to find the custom app files in the dist folder as they are named in dev. So the Uglify task is creating files with the same name, and not concatenating. 

There do appear to be work-arounds to the esri/dojo bundle issue. Performing custom dojo builds with individual esri modules, if you want to get into that, might be the best way. See here for some ideas: http://gis.utah.gov/the-esri-api-for-javascriptdojo-build-system-saga-continues/ .Check out some of Scott's earlier posts for a bit of history on this.

The Backbone views could be handled differently but this works pretty well. There is though an issue with the ESRI map control though hiding/showing the map view. When navigating back to the Map view after visiting the About view, the map control does not redraw. After making a new bald spot on my head, my work around was to save map state info and then recreate it when going back to that view. Would like to find a better way of doing that to avoid the extra server calls.

Looking forward to comments and/or suggestions.

Loren Mueller