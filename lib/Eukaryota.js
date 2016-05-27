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


}