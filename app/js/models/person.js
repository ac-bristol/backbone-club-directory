define([
  'jquery',
  'underscore', 
  'backbone'
  ], function($, _, Backbone){
	
	PersonModel = Backbone.Model.extend({
		defaults: {
			'ID': '',
			'clubname': '',
			'phone': '',
			'website': '',
			'email': '',
			'category': ''
		},
		
		initialize: function() {
			var self = this;
			if(this.get('category') === 'Tri') {
				self.set('type', 'Tri');
			} else if(this.get('category') === 'Swim') {
				self.set('type', 'Swim');
			} else if(this.get('category') === 'Cycle') {
				self.set('type', 'Cycle');
			} else {
				self.set('type', 'Run');
			}
		}
		
	});
	
	return PersonModel;
	
});