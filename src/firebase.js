import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy0b4JjW6JagFk-kkf9PEBqrUHyyaTcfE",
  authDomain: "atria-elias-de-fabrittis.firebaseapp.com",
  projectId: "atria-elias-de-fabrittis",
  storageBucket: "atria-elias-de-fabrittis.appspot.com",
  messagingSenderId: "1015534890414",
  appId: "1:1015534890414:web:dab9300e6f3647d1122c3f"
};

let app = initializeApp(firebaseConfig);

export const db = getFirestore(app);