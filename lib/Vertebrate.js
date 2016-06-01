import Bilateral from './Bilateral';
export default class Vertebrate extends Bilateral {
  constructor( name ) {
    super(name);
    this._name = name;
    this._body = 'vertebral-column';
  }
}