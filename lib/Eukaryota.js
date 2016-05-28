import Livingthing from './LivingThing.js';
export default class Eukaryota extends Livingthing{
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile, heterotroph);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;
  }

  set heterotroph(heterotroph){
    if (typeof (heterotroph) === 'boolean'){
      this._heterotroph = heterotroph;
    }else{
      throw new TypeError('Eukaryota.heterotroph must be a boolean');
    }
  }

  get autotroph(){
    if(this._heterotroph === true){
      return false;
    }else{
      return true;
    }
  }

  set autotroph(autotroph){
    if(typeof(autotroph) === 'boolean'){
      if(autotroph === true){
        this._heterotroph = !(autotroph);
      }else{
        throw new TypeError('Eukaryota.autotroph must be a boolean');
      }
    }
  }
}