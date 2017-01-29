import Ember from 'ember';
import merge from 'lodash/merge';

const eAssign = Ember.assign || Object.assign;

export function assign(params, { deep = false } = {}) {
  if (deep) {
    return merge({}, ...params);
  } else {
    return eAssign({}, ...params);
  }
}

export default Ember.Helper.helper(assign);
