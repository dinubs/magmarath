const Item = require('../src/item');

test('new Item() should not fail', () => {
  expect(() => new Item('test', {})).not.toThrow();
});

test('item#display should use type formatter', () => {
  const item = new Item('test', { defaultValue: 1, typeFormatter: Number });
  expect(item.display()).toBe('1');

  const displayItem = new Item('test', { defaultValue: new Date('2000-1-1'), typeFormatter: Date, displayFormatter: (d) => d.getYear() })
  expect(displayItem.display()).toBe('100');
});

test('item#validate should return false when invalid', () => {
  const item = new Item('test', { defaultValue: 1, options: [1,2,3] });
  expect(item.validate(4)).toBe(false);
});

test('item#validate should return true when valid', () => {
  const item = new Item('test', { defaultValue: 1, options: [1,2,3] });
  expect(item.validate(2)).toBe(true);
});

test('item#update should coerce item to be correct type', () => {
  const item = new Item('test', { defaultValue: 1, options: [1,2,3], typeFormatter: Number });
  item.update('2');
  expect(item.value).toBe(2);
});

test('item#update should fallback to default when not valid', () => {
  const item = new Item('test', { defaultValue: 1, options: [1,2,3], typeFormatter: Number });
  item.update('5');
  expect(item.value).toBe(1);
});
