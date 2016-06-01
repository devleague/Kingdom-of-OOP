import Bilateral from './Bilateral';
export default class Mollusk extends Bilateral {
  constructor( name ) {
    super(name);
    this._name = name;
    this._body = 'soft-bodied';
  }
}