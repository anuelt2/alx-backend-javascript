const cloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string') {
      throw new TypeError('Brand and motor and color must be strings');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method that returns a new object of the class
  [cloneSymbol]() {
    const Cls = this.constructor;
    return new Cls(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
