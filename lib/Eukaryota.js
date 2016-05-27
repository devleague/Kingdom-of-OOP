import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  set heterotroph(heterotroph) {
    if (typeof (heterotroph) === 'boolean') {
      this._heterotroph = heterotroph;
    } else {
      throw new TypeError('heterotroph must be a boolean value.');
    }
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set autotroph(autotroph) {
    if (typeof (autotroph) === 'boolean') {
      this._heterotroph = !(autotroph);
    } else {
      throw new TypeError('autotroph must be a boolean value.');
    }
  }

  get autotroph() {
    return !(this._heterotroph);
  }
}