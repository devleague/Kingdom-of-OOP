import Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota{
  constructor (name, symmetry){
    super(name, false, false, true, true, symmetry);
    this._symmetry = symmetry;
  }

  get symmetry(){
    return this._symmetry;
  }

  set symmetry(symmetry){
    if ( typeof(symmetry) === 'string') {
      this._symmetry = symmetry;
    }else{
      throw new TypeError('symmetry must be a string');
    }
  }
}