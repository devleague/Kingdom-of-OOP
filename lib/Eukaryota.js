import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile, heterotroph);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;
  }

  set heterotroph(value){
    this._heterotroph = value;
  }

  get autotroph() {
    if(this.heterotroph === true){
      return false;
    } else{
      return true;
    }
  }

  set autotroph(value){
    if(value === true){
      this.heterotroph = false;
    }
  }
}