export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('Name and code must be strings');
    }

    this._name = name;
    this._code = code;
  }

  // Getter for default string description
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
