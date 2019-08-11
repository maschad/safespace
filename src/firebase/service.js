import firebase from 'react-native-firebase';
class FirebaseService {
  constructor() {
    this.accounts = firebase.firestore().collection('Accounts');
    this.bounties = firebase.firestore().collection('Bounties');
  }
  async load(id) {
    const doc = await this.accounts.doc(id).get();
     return doc.data()
  }

  async getAllBounties() {
    const snapshot = await this.bounties.get();
    return snapshot.docs.map(doc => doc.data());
  }
}
export const firebaseService = new FirebaseService();
