class Item {
  constructor(name, {
    defaultValue,
    options,
    typeFormatter,
    displayFormatter,
  }) {
    const opts = {
      defaultValue,
      options: options === undefined ? [] : options,
      typeFormatter: typeFormatter === undefined ? (v) => v : typeFormatter,
      displayFormatter: displayFormatter === undefined ?  (v) => v : displayFormatter,
    }
    this.name = name;
    this.defaultValue = opts.defaultValue;
    this.options = opts.options;
    this.typeFormatter = opts.typeFormatter;
    this.displayFormatter = opts.displayFormatter;

    this.value = this.defaultValue;
  }

  display() {
    return String(this.displayFormatter(this.value));
  }

  validate(value = this.value) {
    return this.options.length === 0 || !!this.options.find((option) => option === value);
  }

  update(newValue = this.value) {
    newValue = this.typeFormatter(newValue);
    if (!this.validate(newValue)) {
      this.value = this.defaultValue;
    } else {
      this.value = newValue;
    }
  }
}

module.exports = Item;
