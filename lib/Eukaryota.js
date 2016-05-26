import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing{
  constructor (name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile, heterotroph);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;
  }

  set heterotroph(heterotroph){
    if ( typeof(heterotroph) === 'boolean') {
      this._heterotroph = heterotroph;
    }else{
      throw new TypeError('heterotroph must be a boolean');
    }
  }

  get autotroph(){
    return !this.heterotroph;
  }

  set autotroph(autotroph){
    if ( typeof(autotroph) === 'boolean') {
      this._heterotroph = !autotroph;
    }else{
      throw new TypeError('autotroph must be a boolean');
    }
  }
}