import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?chamber=' + params.chamber + "&history.vetoed=true&apikey=2e1eb1d49f9440b7b4815e293e303986";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
