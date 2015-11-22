import LivingThing from './LivingThing.js';

export default class Eukaryota extends LivingThing {
  constructor (name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile, heterotroph);
    this._heterotroph = heterotroph;
  }

  get heterotroph () {
    return this._heterotroph;
  }

  set heterotroph (boolean) {
    this._heterotroph = boolean;
  }

  get autotroph () {
    return !this._heterotroph;
  }

  set autotroph (boolean) {
    this._heterotroph = !boolean;
  }
}