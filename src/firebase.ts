import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA44t7ClSmwibs1Wv6666_f2CqSjmFzW_8",
  authDomain: "hkv-clips.firebaseapp.com",
  projectId: "hkv-clips",
  storageBucket: "hkv-clips.appspot.com",
  messagingSenderId: "574317723165",
  appId: "1:574317723165:web:abca1e0cd7b7917fef10f4",
  measurementId: "G-05KP648QYH",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const storage = getStorage(app);
const db = getDatabase(app);
export { storage, provider, auth, app, db };
