export default class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
  }

  get uniCellular(){
    return this._uniCellular;
  }
  set uniCellular(hasOneCell){
    if (typeof (hasOneCell) === 'boolean'){
      this._uniCellular = hasOneCell;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get multiCellular(){
    return !this._uniCellular;
  }
  set multiCellular(hasOneCell){
    if (typeof (hasOneCell) === 'boolean'){
      this._uniCellular = !hasOneCell;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get eukaryote(){
    return this._trueNucleus;
  }
  set eukaryote(hasNucleus){
    if (typeof (hasNucleus) === 'boolean'){
      this._trueNucleus = hasNucleus;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get prokaryote(){
    return !this._trueNucleus;
  }
  set prokaryote(hasNucleus){
    if (typeof (hasNucleus) === 'boolean'){
      this._trueNucleus = !hasNucleus;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get anaerobic(){
    return this._anaerobic;
  }
  set anaerobic(liveWithoutAir){
    if (typeof (liveWithoutAir) === 'boolean'){
      this._anaerobic = liveWithoutAir;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get aerobic(){
    return !this._anaerobic;
  }
  set aerobic(liveWithoutAir){
    if (typeof (liveWithoutAir) === 'boolean'){
      this._anaerobic = !liveWithoutAir;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get asexual(){
    return this._asexual;
  }
  set asexual(isAsexual){
    if (typeof (isAsexual) === 'boolean'){
      this._asexual = isAsexual;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get sexual(){
    return !this._asexual;
  }
  set sexual(isAsexual){
    if (typeof (isAsexual) === 'boolean'){
      this._asexual = !isAsexual;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get mobile(){
    return this._mobile;
  }
  set mobile(isAMobile){
    if (typeof (isAMobile) === 'boolean'){
      this._mobile = isAMobile;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }

  get immobile(){
    return !this._mobile;
  }
  set immobile(isAMobile){
    if (typeof (isAMobile) === 'boolean'){
      this._mobile = !isAMobile;
    }else {
      throw new TypeError('The parameter must be a boolean.');
    }
  }
}