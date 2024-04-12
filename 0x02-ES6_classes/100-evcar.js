import Car from './10-car';

export default class EVcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = range;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
