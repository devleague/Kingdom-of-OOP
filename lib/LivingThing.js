export default class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {

    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name () {
    return this._name;
  }

  set name (name) {
    this._name = name;
  }

  get uniCellular () {
    return this._uniCellular;
  }

  set uniCellular (boolean) {
    this._uniCellular = boolean;
  }

  get multiCellular () {
    return !this._uniCellular;
  }

  set multiCellular (boolean) {
    this._uniCellular = !boolean;
  }

  get eukaryote () {
    return this._trueNucleus;
  }

  set eukaryote (boolean) {
    this._trueNucleus = boolean;
  }

  get prokaryote () {
    return !this._trueNucleus;
  }

  set prokaryote (boolean) {
    this._trueNucleus = !boolean;
  }

  get anaerobic () {
    return this._anaerobic;
  }

  set anaerobic (boolean) {
    this._anaerobic = boolean;
  }

  get aerobic () {
    return !this._anaerobic;
  }

  set aerobic (boolean) {
    this._anaerobic = !boolean;
  }

  get asexual () {
    return this._asexual;
  }

  set asexual (boolean) {
    this._asexual = boolean;
  }

  get sexual () {
    return !this._asexual;
  }

  set sexual (boolean) {
    this._asexual = !boolean;
  }

  get mobile () {
    return this._mobile;
  }

  set mobile (boolean) {
    this._mobile = boolean;
  }

  get immobile () {
    return !this._mobile;
  }

  set immobile (boolean) {
    this._mobile = !boolean;
  }
}
