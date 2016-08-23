import Ember from 'ember';

export default Ember.Component.extend({
  chambers: [
    { name: 'house' },
    { name: 'senate' },
    { name: 'joint' },
  ],
  actions: {
    committeeLookup() {
      var params = {
        chamberName: this.get('chamberName')
      };
      this.sendAction('committeeLookup', params);
    }
  }
});
