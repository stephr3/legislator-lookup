import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    vetoLookup() {
      var params = {
        chamber: this.get('chamber')
      };
      this.sendAction('vetoLookup', params);
    }
  }
});
