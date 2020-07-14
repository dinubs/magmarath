# Magmarath

Magmarath is a simple storage system for Javascript. It helps ensure that values put into the store is formatted correctly and is a valid value. Helpful for simple maintaining an external storage (through local storage, JSON file, query string etc).

## Feature

* Central storage location allows you to access all state through one location
* Item validation allows you to ensure that only a set of values will be present in an item
* Display formatting allows you to turn a complex object into a string so it can be saved
* Type formatting allows you to ensure that a value will always be an expected type
* Easily turn your store into JSON and populate it from JSON

## Example

```js
const { Store, Item } = require('magmarath');

const store = new Store();
const item = new Item('country', {
  defaultValue: 'US',
  options: ['US', 'UK', 'CA'],
  displayFormatter: (v) => v.toLowerCase(),
  typeFormatter: (v) => v.toUpperCase(),
});

store.addItem(item);

store.fromJson({ country: 'UK' });

item.value === 'UK' // true

item.update('AU');
item.value === 'AU'; // false

store.toJson() // { country: 'us' }
```

## Installation

`npm i --save magmarath`
