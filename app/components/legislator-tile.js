import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('legislator.first_name','legislator.last_name', function() {
  return this.get('legislator.first_name') + " " + this.get('legislator.last_name');
}),
  districtState: Ember.computed('legislator.state_name', 'legislator.district', function() {
    return this.get('legislator.state_name') + ", " + this.get('legislator.party');
  })
});
