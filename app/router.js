import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('veto_results', {path: '/results/veto/:chamber'});
  this.route('committee-results', {path: '/results/committee/:chamberName'});
});

export default Router;
