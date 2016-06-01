import Eukaryota from './Eukaryota';
export default class Plant extends Eukaryota {
  constructor( name ) {
    super(name);
    this._name = name;
    this._uniCellular = false;
    this._asexual = true;
    this._mobile = false;
    this._heterotroph = false;
  }
}