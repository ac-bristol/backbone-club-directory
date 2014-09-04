define([
  'jquery',
  'underscore', 
  'backbone',
  'models/person'
  ], function($, _, Backbone, Person){
	
	PeopleCollection = Backbone.Collection.extend({
		
		model: Person,
		
		comparator: function(person) {
			return person.get('clubname');
		}
		
	});
	
	return new PeopleCollection;
	
});