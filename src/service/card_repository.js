import firebaseApp from './firebase';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';

class CardRepository {
  constructor() {
    this.database = getDatabase();
  }
  syncCards(userId, onUpdate) {
    const syncRef = ref(this.database, `${userId}/cards`);
    onValue(syncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    return () => ref.off();
  }

  saveCard(userId, card) {
    set(ref(this.database, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.database, `${userId}/cards/${card.id}`), card);
  }
}

export default CardRepository;
