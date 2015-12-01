import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {

  // name, uniCellular, trueNucleus, anaerobic, asexual, mobile
  constructor(name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(heterotroph) {
    this._heterotroph = heterotroph;
  }

  // why does this work????
  get autotroph() {
    return !this._heterotroph;
  }

  set autotroph(heterotroph) {
    this._heterotroph = !heterotroph;
  }
}