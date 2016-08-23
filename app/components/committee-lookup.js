import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeeLookup() {
      var params = {
        chamberName: this.get('chamberName')
      };
      this.sendAction('committeeLookup', params);
    }
  }
});
