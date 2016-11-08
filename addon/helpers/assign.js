import Ember from 'ember';

const eAssign = Ember.assign || Object.assign;

export function assign(params) {
  return eAssign({}, ...params);
}

export default Ember.Helper.helper(assign);
