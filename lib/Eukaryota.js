import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing{
   constructor(name, uniCellular, asexual, mobile, heterotroph){

    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
   }


}