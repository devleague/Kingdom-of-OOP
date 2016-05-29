import LivingThing from './LivingThing';
export default class Archaea extends LivingThing {
	constructor( name ) {
    super(name);
    this._name = name;
  }
}