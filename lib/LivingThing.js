export default class LivingThing {

  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(uniCellular) {
    this._uniCellular = uniCellular;
  }

  get multiCellular() {
    if (this._uniCellular === true) {
      return false;
    } 
    if(this._uniCellular === false) {
      return true;
    }
  }

  set multiCellular(value) {
    if (value === false) {
      this._uniCellular = true;
    }
    if (value === true) {
      this._uniCellular = false;
    }
  }

  get eukaryote() {
    if (this._trueNucleus === true) {
      return true;
    }
    if (this._trueNucleus === false) {
      return false;
    }
  }

  set eukaryote(value) {
    if (value === false) {
      this._trueNucleus = false;
    }
    if (value === true) {
      this._trueNucleus = true;
    }
  }

  get prokaryote() {
    if (this._trueNucleus === true) {
      return false;
    }
    if (this._trueNucleus === false) {
      return true;
    }
  }

  set prokaryote(value) {
    if (value === true) {
      this._trueNucleus = false;
    }
    if (value === false) {
      this._trueNucleus = true;
    }
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(value) {
    if (value === true) {
      this._anaerobic = true;
    }
    if (value === false) {
      this._anaerobic = false;
    }
  }

  get aerobic() {
    if (this._anaerobic === false) {
      return true;
    }
    if (this._anaerobic === true) {
      return false;
    }
  }

  set aerobic(value) {
    if (value === false) {
      this._anaerobic = true;
    }
    if (value === true) {
      this._anaerobic = false;
    }
  }

  get asexual() {
    if (this._asexual === true) {
      return true;
    }
    if (this._asexual === false) {
      return false;
    }
  }

  set asexual(value) {
    if (value === false) {
      this._asexual = false;
    }
    if (value === true) {
      this._asexual = true;
    }
  }

  get sexual() {
    if (this._asexual === true) {
      return false;
    }
    if (this._asexual === false) {
      return true;
    }
  }

  set sexual(value) {
    if (value === true) {
      this._asexual = false;
    }
    if (value === false) {
      this._asexual = true;
    }
  }

  get mobile () {
    if (this._mobile === true) {
      return true;
    }
    if (this._mobile === false) {
      return false;
    }
  }

  set mobile(value) {
    if (value === false) {
      this._mobile = false;
    }
    if (value === true) {
      this._mobile = true;
    }
  }

  get immobile() {
    if (this._mobile === true) {
      return false;
    }
    if (this._mobile === false) {
      return true;
    }
  }

  set immobile(value) {
    if (value === true) {
      this._mobile = false;
    }
    if (value === false) {
      this._mobile = true;
    }
  }
}