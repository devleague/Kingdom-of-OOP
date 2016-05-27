import  Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota{
   constructor(name,Symmetry){

    super(name, false, false, true, true);
    this._symmetry = Symmetry;
   }
   get symmetry(){
    return this._symmetry;
   }
   set symmetry(val){
     if( typeof(val) === 'string' ){
      this._symmetry = val;
    }else{
      throw new TypeError('Animal.symmetry must be a string');
    }
   }
}