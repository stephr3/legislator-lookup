import Ember from 'ember';

export function dateFormat(params) {
  var bill = params[0];
  var date_vetoed = bill.history.vetoed_at;
  date_vetoed = date_vetoed.split('-');
  var formatted = date_vetoed[1] + '-' + date_vetoed[2] + '-' + date_vetoed[0];
  return Ember.String.htmlSafe('<span>'+ formatted + '</span>')
}

export default Ember.Helper.helper(dateFormat);
