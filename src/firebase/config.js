import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC6zxKBRnVAXbll6kHg8S9HkJZQOfYVHjQ",
    authDomain: "notebook-app-b3422.firebaseapp.com",
    projectId: "notebook-app-b3422",
    storageBucket: "notebook-app-b3422.appspot.com",
    messagingSenderId: "64447473881",
    appId: "1:64447473881:web:a2907f0e7ebf10c4f9f6c8"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth }