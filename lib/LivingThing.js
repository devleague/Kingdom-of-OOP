export default class LivingThing {
  constructor( name, uniCellular, trueNucleus, anaerobic, asexual, mobile ){
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
    if ( typeof (name) === 'string') {
         this._name = name;
    } else {
      throw new TypeError('LivingThing.name must be a string');
    }
  }
  get uniCellular(){
    return this._uniCellular;
  }
  set uniCellular( uniCellular ){
    if ( typeof (uniCellular) === 'boolean') {
         this._uniCellular = uniCellular;
    } else {
      throw new TypeError('LivingThing.uniCellular must be a boolean');
    }
  }
  get multiCellular(){
    return this._uniCellular;
  }
  set multiCellular( multiCellular ){
    if ( typeof (multiCellular) === 'boolean') {
         this._uniCellular = multiCellular;
    } else {
      throw new TypeError('LivingThing.multiCellular must be a uniCellular');
    }
  }
  get eukaryote(){
    return this._trueNucleus;
  }
  set eukaryote( eukaryote ){
    if ( typeof (eukaryote) === 'boolean') {
         this._trueNucleus = eukaryote;
    } else {
      throw new TypeError('LivingThing.eukaryote must be a trueNucleus');
    }
  }
  get prokaryote(){
    return this._trueNucleus;
  }
  set prokaryote( prokaryote ){
    if ( typeof (prokaryote) === 'boolean') {
         this._trueNucleus = prokaryote;
    } else {
      throw new TypeError('LivingThing.prokaryote must be a trueNucleus');
    }
  }
  get anaerobic(){
    return this._anaerobic;
  }
  set anaerobic( anaerobic ){
    if ( typeof (anaerobic) === 'boolean') {
         this._anaerobic = anaerobic;
    } else {
      throw new TypeError('LivingThing.anaerobic must be a boolean');
    }
  }
  get aerobic(){
    return this._anaerobic;
  }
  set aerobic( aerobic ){
    if ( typeof (aerobic) === 'boolean') {
         this._anaerobic = aerobic;
    } else {
      throw new TypeError('LivingThing.aerobic must be anaerobic');
    }
  }
  get asexual(){
    return this._asexual;
  }
  set asexual( asexual ){
    if ( typeof (asexual) === 'boolean') {
        this._asexual = asexual;
    } else {
    throw new TypeError('LivingThing.asexual must be asexual');
    }
  }
  get sexual(){
    return this._asexual;
  }
  set sexual( sexual ){
    if ( typeof (sexual) === 'boolean') {
         this._asexual = sexual;
    } else {
      throw new TypeError('LivingThing.sexual must be asexual');
    }
  }
  get mobile(){
    return this._mobile;
  }
  set mobile(mobile){
    if ( typeof (mobile) === 'boolean') {
         this._mobile = mobile;
    } else {
      throw new  TypeError('LivingThing.mobile must be a boolean');
    }
  }
  get immobile(){
    return this._mobile;
  }
  set immobile( immobile ){
    if ( typeof (immobile) === 'boolean') {
         this._mobile = immobile;
    } else {
      throw new TypeError('LivingThing.immobile must be a mobile');
    }
  }
}