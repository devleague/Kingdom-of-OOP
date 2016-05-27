export default class LivingThing  {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  set name(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be a string value.');
    }

  }

  get name() {
    return this._name;
  }

  set uniCellular(uniCellular) {
    if (typeof (uniCellular) === 'boolean') {
      this._uniCellular = uniCellular;
    } else {
      throw new TypeError('uniCellular must be a boolean value.');
    }
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set multiCellular(multiCellular) {
    if (typeof (multiCellular) === 'boolean') {
      this._uniCellular = !(multiCellular);
    } else {
      throw new TypeError('multiCellular must be a boolean value.');
    }
  }

  get multiCellular() {
    return !(this._uniCellular);
  }

  set eukaryote(eukaryote) {
    if (typeof (eukaryote) === 'boolean') {
      this._trueNucleus = eukaryote;
    } else {
      throw new TypeError('eukaryote must be a boolean value.');
    }
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set prokaryote(prokaryote) {
    if (typeof (prokaryote) === 'boolean') {
      this._trueNucleus = !(prokaryote);
    } else {
      throw new TypeError('prokaryote must be a boolean value.');
    }
  }

  get prokaryote() {
    return !(this._trueNucleus);
  }

  set anaerobic(anaerobic) {
    if (typeof (anaerobic) === 'boolean') {
      this._anaerobic = anaerobic;
    } else {
      throw new TypeError('anaerobic must be a boolean value.');
    }
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set aerobic(aerobic) {
    if (typeof (aerobic) === 'boolean') {
      this._anaerobic = !(aerobic);
    } else {
      throw new TypeError('aerobic must be a boolean value.');
    }
  }

  get aerobic() {
    return !(this.anaerobic);
  }

  set asexual(asexual) {
    if (typeof (asexual) === 'boolean') {
      this._asexual = asexual;
    } else {
      throw new TypeError('asexual must be a boolean value.');
    }
  }

  get asexual() {
    return this._asexual;
  }

  set sexual(sexual) {
    if (typeof (sexual) === 'boolean') {
      this._asexual = !(sexual);
    } else {
      throw new TypeError('sexual must be a boolean value.');
    }
  }

  get sexual() {
    return !(this._asexual);
  }

  set mobile(mobile) {
    if (typeof (mobile) === 'boolean') {
      this._mobile = mobile;
    } else {
      throw new TypeError('mobile must be a boolean value.');
    }
  }

  get mobile() {
    return this._mobile;
  }

  set immobile(immobile) {
    if (typeof (immobile) === 'boolean') {
      this._mobile = !(immobile);
    } else {
      throw new TypeError('immobile must be a boolean value.');
    }
  }

  get immobile() {
    return !(this._mobile);
  }
}