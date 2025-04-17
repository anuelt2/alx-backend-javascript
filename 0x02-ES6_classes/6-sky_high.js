import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    this._floors = floors;
  }

  // Getter for floors attribute of type Number
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage from parent class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
