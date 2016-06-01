import Animal from './Animal';
export default class Bilateral extends Animal {
  constructor( name, body ) {
    super(name);
    super(body);
    this._name = name;
    this._body = body;
    this._symmetry = 'bilateral';
  }
  get body(){
    return this._body;
  }
  set body( body ) {
    if ( typeof(body) === 'string') {
      this._body = body;
    } else {
      throw new TypeError('Bilateral.body must be a string');
    }
  }
}