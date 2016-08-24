import Ember from 'ember';
import config from '../config/environment';

var key = config.myApiKey;

export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey='+ key +'&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
