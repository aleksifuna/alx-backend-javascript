import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  set floors(value) {
    // setter for floor
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  get floors() {
    // getter for floors
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
