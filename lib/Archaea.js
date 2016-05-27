import livingThing from './LivingThing';

export default class Archaea extends livingThing{
  constructor(name){
    super(name, true, false, true, true, false);
  }
}