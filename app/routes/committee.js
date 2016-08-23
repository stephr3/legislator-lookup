import Ember from 'ember';

export default Ember.Route.extend({
  showSubcommittees: false,
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id='+ params.committee_id + '&apikey=2e1eb1d49f9440b7b4815e293e303986';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      if(responseJSON.length = 0) {
        this.set('showSubcommittees', true);
      }
      return responseJSON.results;
    });
   }
});
