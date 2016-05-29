import LivingThing from './LivingThing';
export default class Eukaryota extends LivingThing {
  constructor( name, uniCellular, asexual, mobile, heterotroph ){
    super(name);
    super(uniCellular);
    super(asexual);
    super(mobile);
    super(heterotroph);
    this._name = name;
    this._uniCellular = uniCellular;
    this._asexual = asexual;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }
}