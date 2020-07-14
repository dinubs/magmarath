# Magmarath

Magmarath is a simple storage system for Javascript. It helps ensure that values put into the store is formatted correctly and is a valid value. Helpful for simple maintaining an external storage (through local storage, JSON file, query string etc).

## Examples

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
