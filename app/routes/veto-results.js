import Ember from 'ember';
import config from '../config/environment';

var key = config.myApiKey;

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?chamber=' + params.chamber + "&history.vetoed=true&apikey=" + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
