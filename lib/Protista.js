import Eukaryota from './Eukaryota';
export default class Protista extends Eukaryota {
  constructor( name, uniCellular, mobile, heterotroph ) {
    super(name);
    super(uniCellular);
    super(mobile);
    super(heterotroph);
    this._name = name;
    this._uniCellular = uniCellular;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
    this._asexual = true;
  }
}