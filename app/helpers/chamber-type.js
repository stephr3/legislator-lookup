import Ember from 'ember';

export function chamberType(params) {
  var bill = params[0];

  if (bill.chamber === 'house') {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-home"></span>');
  } else if(bill.chamber === 'senate') {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-list-alt"></span>');
  } else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-link"></span>');  
  }

}

export default Ember.Helper.helper(chamberType);
