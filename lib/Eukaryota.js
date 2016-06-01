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
    this._trueNucleus = true;
    this._anaerobic = false;
  }
    get heterotroph() {
        return this._heterotroph;
    }
    set heterotroph( heterotroph ) {
        if ( typeof(heterotroph) === 'boolean') {
            this._heterotroph = heterotroph;
        } else {
            throw new TypeError('Eukaryota.heterotroph must be a boolean');
        }
    }
    get autotroph(){
        return !this._heterotroph;
    }
    set autotroph(autotroph){
        if ( typeof(autotroph) === 'boolean') {
            this._heterotroph = !autotroph;
        } else {
            throw new TypeError('Eukaryota.autotroph must be a boolean');
        }
    }
}