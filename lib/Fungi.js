import Eukaryota from './Eukaryota';

export default class Fungi extends Eukaryota {

  // name, uniCellular, asexual, mobile, heterotroph
  constructor(name) {
    super(name, false, true, false, true);
  }
}