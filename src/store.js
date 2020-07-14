class Store {
  constructor() {
    this.items = {};
  }

  addItem(item) {
    this.items[item.name] = item;
  }

  toJson() {
    return Object.entries(this.items).reduce((memo, [name, item]) => {
      memo[name] = item.display();
      return memo;
    }, {});
  }

  fromJson(json) {
    Object.entries(json).forEach(([name, value]) => {
      const item = this.items[name];
      if (!item) {
        return;
      }
      item.update(value);
    });
  }
}

module.exports = Store;
