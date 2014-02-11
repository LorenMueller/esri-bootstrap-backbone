define(["myApp/views/vBase","dojo/text!myApp/templates/tAbout.html"], function (ViewBase,Template) {
    var v = ViewBase.extend({
        attributes: {style:'display:none'},
        template: _.template(Template),
		id: "about-view",
		initialize: function() {
			$("body").append(this.el);
			this.render();
		}
    });
    return v;
});