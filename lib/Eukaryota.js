import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing{
   constructor(name, uniCellular, asexual, mobile, heterotroph){

    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
   }
   get heterotroph(){
    return this._heterotroph;
   }
   set heterotroph(val){
    if( typeof(val) === 'boolean' ){
      this._heterotroph = val;
    }else{
      throw new TypeError('Eukaryota.heterotroph must be a boolean');
    }
  }
  get autotroph(){
    return !this._heterotroph;
  }

  set autotroph(val){
    if( typeof(val) === 'boolean' ){
      if(val === false){
        this._heterotroph = true;
      }
      else{
        this._heterotroph = false;
      }
    }else{
      throw new TypeError('Eukaryota.heterotroph must be a boolean');
    }
  }

}