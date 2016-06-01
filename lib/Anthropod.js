import Bilateral from './Bilateral';
export default class Anthropod extends Bilateral {
  constructor( name ) {
    super(name);
    this._name = name;
    this._body = 'exoskeleton';
  }
}