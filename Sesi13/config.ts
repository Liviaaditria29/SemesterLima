// Import the functions you need from the SDKs you need
import {FirebaseApp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqgZfo801Ht1dehm5D5k29gzWsnb7SoDU',
  authDomain: 'journeyapp-6138c.firebaseapp.com',
  projectId: 'journeyapp-6138c',
  storageBucket: 'journeyapp-6138c.firebasestorage.app',
  messagingSenderId: '768875452590',
  appId: '1:768875452590:web:9a4356994257298b52353f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
