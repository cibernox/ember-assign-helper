import { assign } from 'dummy/helpers/assign';
import { module, test } from 'qunit';

module('Unit | Helper | assign');

test('It is equivalent to doing `Object.assign(...params)`', function(assert) {
  let params = [{ foo: 'bar', bar: 'baz' }, { bar: 'foobar', qux: 'quux' }];
  let result = assign(params);
  assert.deepEqual(result, {
    foo: 'bar',
    bar: 'foobar',
    qux: 'quux'
  });
});


test('If passed `deep=true` it performs a deep merge', function(assert) {
  let params = [
    {
      foo: 'bar',
      bar: 'baz',
      settings: {
        quotes: 'double',
        parens: 'always'
      }
    },
    {
      bar: 'foobar',
      qux: 'quux',
      settings: {
        quotes: 'single',
        spaces: 'around'
      }
    }
  ];
  let result = assign(params, { deep: true });
  assert.deepEqual(result, {
    foo: 'bar',
    bar: 'foobar',
    qux: 'quux',
    settings: {
      quotes: 'single',
      parens: 'always',
      spaces: 'around'
    }
  })
});

