import Animal from './Animal';
export default class Cnidarian extends Animal {
  constructor(name, body){
    super(name, 'bilateral');
    this._body = body;
  }

  get body(){
    return this._body;
  }
  set body(bodyType){
    if (typeof (bodyType) === 'string'){
      this._body = bodyType;
    }else {
      throw new TypeError('The parameter must be a string.');
    }
  }
}