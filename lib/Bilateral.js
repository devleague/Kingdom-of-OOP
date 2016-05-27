import Animal from './Animal';

export default class Bilateral extends Animal{
  constructor(name, body){
    super(name, 'bilateral');
    this._body = body;
  }

  get body(){
    return this._body;
  }

  set body(typeOfBody){
    if(typeof(typeOfBody) === 'string'){
      this._body = typeOfBody;
    }else{
      throw new TypeError('Bacteria.heterotroph must be a boolean');
    }
  }
}