define([
  'jquery',
  'underscore', 
  'backbone'
  ], function($, _, Backbone){

	PersonView = Backbone.View.extend({
	
		tagName: 'li',
		
		attributes: function() {
			return {
				class: 'person ' + this.model.get('type')
			};
		},
		
		events: {
			'click .list-header': 'showDetails'
		},
		
		template: _.template($('#person-template').html()),
		
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		
		showDetails: function(e) {
			$(e.target).toggleClass('active');
			$(e.target).siblings('.details').slideToggle('fast');
		}
		
	});
	return PersonView;
	
});