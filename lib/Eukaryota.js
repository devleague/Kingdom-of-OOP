import livingThing from './LivingThing';

export default class Bacteria extends livingThing{
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile);
    this.heterotroph = heterotroph;
  }

  get heterotroph(){
    if(this._heterotroph === true){
      return true;
    }
    else{
      return false;
    }
  }

  set heterotroph(heterotroph){
    if(typeof(heterotroph) === 'boolean'){
      this._heterotroph = heterotroph;
    }else{
      throw new TypeError('Bacteria.heterotroph must be a boolean');
    }
  }

  get autotroph(){
    if(this._heterotroph === true){
      return false;
    }
    else{
      return true;
    }
  }

  set autotroph(isAutotroph){
    if(typeof(isAutotroph) === 'boolean'){
      if(isAutotroph === true){
        this._heterotroph = !(isAutotroph);
      }else{
        this._heterotroph = !(isAutotroph);
      }
    }else{
      throw new TypeError('Bacteria.heterotroph must be a boolean');
    }
  }
}