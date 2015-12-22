export default class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {

  this._name = name;
  //uniCellular is true/false, so if returning boolean, needs to pass through boolean
  this._uniCellular = uniCellular;
  this._trueNucleus = trueNucleus;
  this._anaerobic = anaerobic;
  this._asexual = asexual;
  this._mobile = mobile;
 }

  get name() {
    return this._name;
  }
  //since setting something need to pass through a value
  set name(value) {
    this._name = value;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(value) {
    this._uniCellular = value;
  }

  get multiCellular() {
    if(this._uniCellular === true){
      return false;
    } else{
      return true;
    }
  }

  set multiCellular(value) {
    if(value === this._uniCellular){
      this._uniCellular = true;
    } else{
      return false;
    }
  }
  //similar to checking for uniCellular
  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(value) {
    this._trueNucleus = value;
  }

  get prokaryote() {
    if(this._trueNucleus === true){
      return false;
    } else{
      return true;
    }
  }

  set prokaryote(value) {
    if(value === true){
      this._trueNucleus = false;
    }
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(value) {
    this._anaerobic = value;
  }

  get aerobic() {
    if (this._anaerobic === true){
      return false;
    } else{
      return true;
    }
  }

  set aerobic(value) {
    if(value === false){
      this._anaerobic = true;
    }
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(value) {
    this._asexual = value;
  }

  get sexual() {
    if(this._asexual === true){
      return false;
    } else{
      return true;
    }
  }

  set sexual(value){
    if(value === true){
      this._asexual = false;
    }
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(value){
    this._mobile = value;
  }

  get immobile(){
    if(this._mobile === true){
      return false;
    } else{
      return true;
    }
  }

  set immobile(value){
    if (value === true){
      this._mobile = false;
    }
  }
}


