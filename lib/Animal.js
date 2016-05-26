import Eukaryota from './Eukaryota.js';
export default class Animal extends Eukaryota {
  constructor (name, symmetry) {
    super (name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry () {
    return this._symmetry;
  }

  set symmetry (value) {
    if (typeof (value) === 'string') {
      this._symmetry = value;
    } else {
      throw new TypeError('Animal.symmetry must be a string.');
    }
  }
}