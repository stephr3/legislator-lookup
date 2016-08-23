import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    vetoLookup(params) {
      this.transitionTo('veto_results', params.chamber);
    },
    committeeLookup(params) {
      this.transitionTo('committee-results', params.chamberName);
    }
  }
});
