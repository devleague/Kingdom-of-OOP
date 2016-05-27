import Animal from './Animal';
export default class Cnidarian extends Animal {
  constructor(name) {
    super(name, 'radial');
  }
  get symmetry() {
    return this._symmetry;
  }
  set symmetry(symmetry) {
    if (typeof (symmetry) === 'string') {
      this._symmetry = symmetry;
    } else {
      throw new TypeError('symmetry must be a String value.');
    }
  }
}