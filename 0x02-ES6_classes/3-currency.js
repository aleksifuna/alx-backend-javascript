export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  set code(value) {
    // setter for code attribute
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  get code() {
    // getter for code attribute
    return this._code;
  }

  set name(value) {
    // setter for name attribute
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get name() {
    // getter for name attribute
    return this._name;
  }

  displayFullCurrency() {
    // returns attributes in the format name (code)
    return `${this._name} (${this._code})`;
  }
}
