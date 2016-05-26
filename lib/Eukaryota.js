import LivingThing from './LivingThing.js';
export default class Eukaryota extends LivingThing {
  constructor (name, uniCellular, asexual, mobile, heterotroph) {
    super (name, uniCellular, true, false, asexual, mobile);
    this._trueNucleus = true;
    this._anaerobic = false;
    this._heterotroph = heterotroph;
  }

  get heterotroph () {
    return this._heterotroph;
  }

  set heterotroph (bool) {
    if (typeof (bool) === 'boolean') {
      this._heterotroph = bool;
    } else {
      throw new TypeError('Eukarytoa.heterotroph must be a boolean.');
    }
  }
  get autotroph () {
    return (!this._heterotroph);
  }

  set autotroph (bool) {
    if (typeof (bool) === 'boolean') {
      this._heterotroph = !bool;
    } else {
      throw new TypeError('Eukarytoa.autotroph must be a boolean.');
    }
  }
}