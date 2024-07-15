import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjGomEG2S8g96St6KlVAsK3iZGt0adRc8",
  authDomain: "myntra-6888a.firebaseapp.com",
  projectId: "myntra-6888a",
  storageBucket: "myntra-6888a.appspot.com",
  messagingSenderId: "632077697269",
  appId: "1:632077697269:web:540a858903a2629d4205bc",
  measurementId: "G-B4CVWVF41G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messaging = getMessaging(app);
const storage = getStorage(app); // Initialize Firebase Storage
const auth=getAuth(app);
export { db, messaging, storage ,auth};
