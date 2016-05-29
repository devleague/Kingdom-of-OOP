import LivingThing from './LivingThing';
export default class Fungi extends LivingThing {
  constructor( name ) {
    super(name);
    this._name = name;
  }
}