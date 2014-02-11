define(["myApp/views/vBase","dojo/text!myApp/templates/tSplash.html"], function (ViewBase,Template) {
    var v = ViewBase.extend({
        attributes: {style:'display:none'},
        template: _.template(Template),
		id: "splash-view",
		initialize: function() {
			$("body").html(this.el);
			this.render();
		}
    });
    return v;
});