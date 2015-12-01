import Bilateral from './Bilateral';

export default class Vertebrate extends Bilateral {

  constructor(name) {
    // (name, body)
    super(name, 'vertebral-column');
  }
}