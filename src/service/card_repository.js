import firebaseApp from './firebase';
import { getDatabase, ref, set, remove } from 'firebase/database';

class CardRepository {
  constructor() {
    this.database = getDatabase();
  }
  saveCard(userId, card) {
    set(ref(this.database, `${userId}/cards`), card);
  }
  removeCard(userId, card) {
    remove(ref(this.database, `${userId}/cards`), card);
  }
}

export default CardRepository;
