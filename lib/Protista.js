import Eukaryota from './Eukaryota.js';
export default class Fungi extends Eukaryota{
  constructor(name, uniCellular, mobile, heterotroph){
    super(name, uniCellular, true, mobile, heterotroph);
  }
}