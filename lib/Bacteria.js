import LivingThing from './LivingThing';

export default class Bacteria extends LivingThing {

  // uniCellular, trueNucleus, anaerobic, asexual, mobile
  constructor(name) {
    super(name, true, false, false, true, false);
  }
}