define([], function () {
    var v = Backbone.View.extend({
        render: function () {
            this.$el.html(this.template);
            return this; 
        },
        close:function(){
            if(this.subView) this.subView.remove();
            this.remove();
        }
    });
    return v;
});