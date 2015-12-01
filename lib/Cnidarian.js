import Animal from './Animal';

export default class Cnidarian extends Animal {

  constructor(name) {
    // (name, symmetry)
    super(name, 'radial');
  }
}