import { assign } from 'ember-assign-helper/helpers/assign';
import { module, test } from 'qunit';

module('Unit | Helper | assign');

test('It is equivalent to doing `Object.assign(...params)`', function(assert) {
  let params = [{ foo: 'bar', bar: 'baz' }, { bar: 'foobar', qux: 'quux' }];
  let result = assign(params);
  assert.equal(result.foo, 'bar');
  assert.equal(result.bar, 'foobar');
  assert.equal(result.qux, 'quux');
});

