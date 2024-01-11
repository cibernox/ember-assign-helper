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

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v18 or above
