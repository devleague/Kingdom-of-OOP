import LivingThing from './LivingThing';
export default class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;
  }
  set heterotroph(cantMakeOwnFood){
    if (typeof (cantMakeOwnFood) === 'boolean'){
      this._heterotroph = cantMakeOwnFood;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get autotroph(){
    return !this._heterotroph;
  }
  set autotroph(cantMakeOwnFood){
    if (typeof (cantMakeOwnFood) === 'boolean'){
      this._heterotroph = !cantMakeOwnFood;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }
}