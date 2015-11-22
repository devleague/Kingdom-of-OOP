import Eukaryota from './Eukaryota.js';

export default class Fungus extends Eukaryota {
  constructor (name) {
    super(name, false, true, false, true);
  }
}