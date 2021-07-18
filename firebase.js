import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAvVwL0Yr5h2o6y-eQNJLqj11q_1NfeSig',
  authDomain: 'doc-nextjs.firebaseapp.com',
  projectId: 'doc-nextjs',
  storageBucket: 'doc-nextjs.appspot.com',
  messagingSenderId: '338803548210',
  appId: '1:338803548210:web:483b2c1bd9f52395049c2b',
  measurementId: 'G-S3TKVKKCMV',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
