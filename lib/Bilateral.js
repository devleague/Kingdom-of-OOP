import  Animal from './Animal';

export default class Bilateral extends Animal{
   constructor(name, body){

    super(name, 'bilateral');
    this._body = body;
   }

   get body(){
    return this._body;
   }

   set body(val){
    if( typeof(val) === 'string' ){
      this._body = val;
    }else{
      throw new TypeError('Bilateral.body must be a string');
    }
   }
}