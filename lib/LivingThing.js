export default class livingThing{
  constructor(name, uniCellular, trueNucleus, anaerobic,asexual, mobile){
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
    if( typeof(name) === 'string'){
      this._name = name;
    }else{
      throw new TypeError('livingThing.name must be a string');
    }
  }

  get uniCellular(){
    if(this._uniCellular === true){
      return true;
    }
    else{
      return false;
    }
  }

  set uniCellular(uniCellular){
    if(typeof(uniCellular) === 'boolean'){
      this._uniCellular = uniCellular;
    }else{
      throw new TypeError('livingThing.uniCellular must be a boolean');
    }
  }

  get multiCellular(){
    if(this._uniCellular === true){
      return false;
    }
    else{
      return true;
    }
  }

  set multiCellular(isMulti){
    if(typeof(isMulti) === 'boolean'){
      if(isMulti === true){
        this._uniCellular = !(isMulti);
      }
      else{
        this._uniCellular = !(isMulti);
      }
    }else{
      throw new TypeError('livingThing.uniCellular must be a boolean');
    }
  }

  get eukaryote(){
    if(this._trueNucleus === true){
      return true;
    }
    else{
      return false;
    }
  }

  set eukaryote(trueNucleus){
    if(typeof(trueNucleus) === 'boolean'){
      this._trueNucleus = trueNucleus;
    }else{
      throw new TypeError('livingThing.trueNucleus must be a boolean');
    }
  }

  get prokaryote(){
    if(this._trueNucleus === true){
      return false;
    }
    else{
      return true;
    }
  }

  set prokaryote(isProkaryote){
    if(typeof(isProkaryote) === 'boolean'){
      if(isProkaryote === true){
        this._trueNucleus = !(isProkaryote);
      }
      else{
        this._trueNucleus = !(isProkaryote);
      }
    }else{
      throw new TypeError('livingThing.trueNucleus must be a boolean');
    }
  }

  get anaerobic(){
    if(this._anaerobic === true){
      return true;
    }
    else{
      return false;
    }
  }

  set anaerobic(anaerobic){
    if(typeof(anaerobic) === 'boolean'){
      this._anaerobic = anaerobic;
    }else{
      throw new TypeError('livingThing.anaerobic must be a boolean');
    }
  }

  get aerobic(){
    if(this._anaerobic === true){
      return false;
    }
    else{
      return true;
    }
  }

  set aerobic(isAerobic){
    if(typeof(isAerobic) === 'boolean'){
      if(isAerobic === true){
        this._anaerobic = !(isAerobic);
      }
      else{
        this._anaerobic = !(isAerobic);
      }
    }else{
      throw new TypeError('livingThing.aerobic must be a boolean');
    }
  }

  get asexual(){
    if(this._asexual === true){
      return true;
    }
    else{
      return false;
    }
  }

  set asexual(asexual){
    if(typeof(asexual) === 'boolean'){
      this._asexual = asexual;
    }else{
      throw new TypeError('livingThing.asexual must be a boolean');
    }
  }

  get sexual(){
    if(this._asexual === true){
      return false;
    }
    else{
      return true;
    }
  }

  set sexual(isSexual){
    if(typeof(isSexual) === 'boolean'){
      if(isSexual === true){
        this._asexual = !(isSexual);
      }
      else{
        this._asexual = !(isSexual);
      }
    }else{
      throw new TypeError('livingThing.sexual must be a boolean');
    }
  }

  get mobile(){
    if(this._mobile === true){
      return true;
    }
    else{
      return false;
    }
  }

  set mobile(mobile){
    if(typeof(mobile) === 'boolean'){
      this._mobile = mobile;
    }else{
      throw new TypeError('livingThing.mobile must be a boolean');
    }
  }

  get immobile(){
    if(this._mobile === true){
      return false;
    }
    else{
      return true;
    }
  }

  set immobile(isImmobile){
    if(typeof(isImmobile) === 'boolean'){
      if(isImmobile === true){
        this._mobile = !(isImmobile);
      }
      else{
        this._mobile = !(isImmobile);
      }
    }else{
      throw new TypeError('livingThing.mobile must be a boolean');
    }
  }
}