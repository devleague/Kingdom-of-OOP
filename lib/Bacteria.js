import livingThing from './LivingThing';

export default class Bacteria extends livingThing{
  constructor(name){
    super(name, true, false, false, true, false);
  }
}