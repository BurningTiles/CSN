import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDrXtcMETgtrilrML1S52PqoXPYf5mtH2c',
  authDomain: 'csn-747e6.firebaseapp.com',
  projectId: 'csn-747e6',
  storageBucket: 'csn-747e6.appspot.com',
  messagingSenderId: '529122755112',
  appId: '1:529122755112:web:7b476bdc0da601bb9d2b1d',
  measurementId: 'G-9260615R4J',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export default firebase;

/* import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCciInTDWdwOw5FZIS9ka9zxUKhqUB3e3k',
        authDomain: 'csworld-5feed.firebaseapp.com',
        databaseURL: 'https://csworld-5feed.firebaseio.com',
        projectId: 'csworld-5feed',
        storageBucket: 'csworld-5feed.appspot.com',
        messagingSenderId: '1051111303089',
        appId: '1:1051111303089:web:ac1125c170158a89c47f90',
        measurementId: 'G-CM1F87KDTB',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    }
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
 */
