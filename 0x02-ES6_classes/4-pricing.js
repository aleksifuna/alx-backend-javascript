import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Pricing must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency object');
    }
    this._amount = amount;
    this._currency = currency;
  }

  set amount(value) {
    // setter for amount attribute
    if (typeof value !== 'number') {
      throw new TypeError('Pricing must be a number');
    }
    this._amount = value;
  }

  get amount() {
    // getter for amount attribute
    return this._amount;
  }

  set currency(value) {
    // setter for currency
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency object');
    }
    this._currency = value;
  }

  get currency() {
    // getter for currency
    return this._currency;
  }

  displayFullPrice() {
    // returns instance attributes in format amount currency_name (currency_code)
    return `${this._amount} ${this._currency._name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
