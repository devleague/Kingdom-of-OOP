import Eukaryota from './Eukaryota';
export default class Animal extends Eukaryota {
  constructor( name, symmetry ) {
    super(name);
    super(symmetry);
    this._name = name;
    this._symmetry = symmetry;
    this._uniCellular = false;
    this._asexual = false;
    this._mobile = true;
    this._heterotroph = true;
  }
  get symmetry() {
    return this._symmetry;
  }
  set symmetry( symmetry ) {
    if ( typeof(symmetry) === 'boolean') {
      this._symmetry = symmetry;
    } else {
      throw new TypeError('Animal.symmetry must be a boolean');
    }
  }
}