import Ember from 'ember';

export function subcommitteeNumber(params) {
  var results = params[0];
  var resultsLength = results.length;
  return Ember.String.htmlSafe('<span>' + resultsLength + '</span>')
}

export default Ember.Helper.helper(subcommitteeNumber);
