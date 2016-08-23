import Ember from 'ember';

export function introDateFormat(params) {
  var bill = params[0];
  var date_intro = bill.introduced_on;
  date_intro = date_intro.split('-');
  var formatted = date_intro[1] + '-' + date_intro[2] + '-' + date_intro[0];
  return Ember.String.htmlSafe('<span>'+ formatted + '</span>')
}

export default Ember.Helper.helper(introDateFormat);
