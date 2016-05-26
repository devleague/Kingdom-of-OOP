import Eukaryota from './Eukaryota.js';
export default class Protista extends Eukaryota {
  constructor (name, uniCellular, asexual, mobile, heterotroph) {
    super (name, uniCellular, true, asexual, mobile, heterotroph);
    }
}