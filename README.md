# ember-assign-helper

This addon provides only **one** useful helper for using it in your templates.

Example usage:

```hbs
{{my-component data=(assign myObject1 myObject2 ... myObjectN)}}
```

```hbs
{{yield (assign publicAPI (hash button=(component "my-button"))}}
```

## Installation

`ember install ember-assign-helper`

## Compatibility

It is compatible with Ember 2.5+ because it's the version of Ember in which `Ember.assign` was introduced.
However, it fallbacks to `Object.assign` if `Ember.assign` is not present, which means that even if you
are in a version of Ember < 2.5 it will work in modern browsers.
