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
    if ( typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('LivingThing.name must be a string.');
    }
  }

  get uniCellular () {
    return this._uniCellular;
  }

  set uniCellular (bool) {
    if (typeof (bool) === 'boolean') {
      this._uniCellular = bool;
    } else {
      throw new TypeError('LivingThing.uniCellular must be a boolean.');
    }
  }

  get multiCellular () {
    return (!this._uniCellular);
  }

  set multiCellular (bool) {
    if (typeof (bool) === 'boolean') {
      this._uniCellular = !bool;
    } else {
      throw new TypeError('LivingThing.multiCellular must be a boolean.');
    }
  }

  get eukaryote () {
    return this._trueNucleus;
  }

  set eukaryote (bool) {
    if (typeof (bool) === 'boolean') {
      this._trueNucleus = bool;
    } else {
      throw new TypeError('LivingThing.eukaryote must be a boolean.');
    }
  }

  get prokaryote () {
    return (!this._trueNucleus);
  }

  set prokaryote (bool) {
    if (typeof (bool) === 'boolean') {
      this._trueNucleus = !bool;
    } else {
      throw new TypeError('LivingThing.prokaryote must be a boolean.');
    }
  }

  get anaerobic () {
    return this._anaerobic;
  }

  set anaerobic (bool) {
    if (typeof (bool) === 'boolean') {
      this._anaerobic = bool;
    } else {
      throw new TypeError('LivingThing.anaerobic must be a boolean.');
    }
  }

  get aerobic () {
    return (!this._anaerobic);
  }

  set aerobic (bool) {
    if (typeof (bool) === 'boolean') {
      this._anaerobic = !bool;
    } else {
      throw new TypeError('LivingThing.aerobic must be a boolean.');
    }
  }

  get asexual () {
    return this._asexual;
  }

  set asexual (bool) {
    if (typeof (bool) === 'boolean') {
      this._asexual = bool;
    } else {
      throw new TypeError('LivingThing.asexual must be a boolean.');
    }
  }

  get sexual () {
    return (!this._asexual);
  }

  set sexual (bool) {
    if (typeof (bool) === 'boolean') {
      this._asexual = !bool;
    } else {
      throw new TypeError('LivingThing.asexual must be a boolean.');
    }
  }

  get mobile () {
    return this._mobile;
  }

  set mobile (bool) {
    if (typeof (bool) === 'boolean') {
      this._mobile = bool;
    } else {
      throw new TypeError('LivingThing.mobile must be a boolean.');
    }
  }

  get immobile () {
    return (!this._mobile);
  }

  set immobile (bool) {
    if (typeof (bool) === 'boolean') {
      this._mobile = !bool;
    } else {
      throw new TypeError('LivingThing.imobile must be a boolean.');
    }
  }
}