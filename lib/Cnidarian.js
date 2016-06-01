import Animal from './Animal';
export default class Cnidarian extends Animal {
  constructor( name ){
    super(name);
    this._name = name;
    this._symmetry = 'radial';
  }
}