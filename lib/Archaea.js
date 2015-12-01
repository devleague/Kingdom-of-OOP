import LivingThing from './LivingThing';

export default class Archaea extends LivingThing {

  // uniCellular, trueNucleus, anaerobic, asexual, mobile
  constructor(name) {
    super(name, true, false, true, true, false);
  }
}