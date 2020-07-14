const Store = require('../src/store');
const Item = require('../src/item');

test('new Store should not fail', () => {
  expect(() => new Store()).not.toThrow();
});

test('store#addItem should add item to store', () => {
  const store = new Store();
  const item = new Item('test', {});
  store.addItem(item);
  expect(store.items['test']).toBe(item);
});

test('store#toJson should format all items as json', () => {
  const store = new Store();
  const item = new Item('test', { defaultValue: 1 });
  store.addItem(item);
  expect(store.toJson()).toStrictEqual({ test: '1' });
});

test('store#fromJson should populate values from json', () => {
  const store = new Store();
  const item = new Item('test', { defaultValue: 1 });
  store.addItem(item);
  const formattedItem = new Item('formatted', { defaultValue: 1, typeFormatter: Number });
  store.addItem(formattedItem);
  const restrictedItem = new Item('restricted', { defaultValue: 1, typeFormatter: Number, options: [1,2,3] });
  store.addItem(restrictedItem);
  store.fromJson({ test: '3', formatted: '3', restricted: '4' });
  expect(item.value).toBe('3');
  expect(formattedItem.value).toBe(3);
  expect(restrictedItem.value).toBe(1);
});


