define(["myApp/views/vBase","dojo/text!myApp/templates/tMap.html"], function (ViewBase,Template) {
    var v = ViewBase.extend({
        template: _.template(Template),
        attributes: {style:'display:none'},
		id: "map-view",
		initialize: function() {
			$("body").append(this.el);
			this.render();
            $("#idWorkingImg").hide();
		}
    });
    return v;
});