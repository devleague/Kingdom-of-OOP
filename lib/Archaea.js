import LivingThing from './LivingThing';

export default class Archaea extends LivingThing {
 constructor (name){
  //inherting from the LivingThing
  super(name, true, false, true, true, false);

 }
}

